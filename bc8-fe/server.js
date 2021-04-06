const jsonServer = require("json-server");
const server = jsonServer.create();
const _ = require("lodash");
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;

server.use(middlewares);
server.use(jsonServer.bodyParser);
const db = router.db;

const getValues = (x) => {
  return _.values(x)[0];
};

server.get("/collaborator-service/collaborators", (req, res) => {
  const collaborators = db.get("collaborators");
  return res.jsonp(collaborators);
});

server.get("/org-management-service/departments", (req, res) => {
  const departments = db.get("departments");
  return res.jsonp(departments);
});

server.get("/domain-service/domains", (req, res) => {
  const query_params = req.query;
  if (!("collaborator_id" in query_params) || !("department_id" in query_params)) return res.sendStatus(400);

  const collaborator_id = query_params.collaborator_id;
  const department_id = query_params.department_id;
  const domain_trust_group_mapping = getValues(db.get())["domain_trust_group"];
  const domain_list = getValues(db.get())["domains"];

  let domainsMap = new Map();
  domain_list.forEach(domain => {
      domainsMap.set(domain.id, domain);
  })

  const filtered_domains_mappings = _.filter(domain_trust_group_mapping, (domain_trust_group_item) => {
    return (
      domain_trust_group_item.collaborator_id === collaborator_id &&
      domain_trust_group_item.department_id === department_id
    );
  });
  
  let domains = [];

  filtered_domains_mappings.forEach(mapping => {
    let domain_temp = domainsMap.get(mapping.domain_id);
    domain_temp.domain_trust_group_id = mapping.id;
    domain_temp.trust_group_id = mapping.trust_group_id;
    domains.push(domain_temp);
  })

  return res.jsonp(domains);
});

server.get("/trust-service/permissions", (req, res) => {
  const query_params = req.query;
  if (!("collaborator_id" in query_params)) res.sendStatus(400);

  const collaborator_id = query_params.collaborator_id;

  const permissions = getValues(db.get())["permissions"];

  const filtered_permissions = _.filter(permissions, (permission) => {
    return permission.collaborator_id === collaborator_id;
  });

  return res.jsonp(filtered_permissions);
});

server.get("/trust-service/trust-groups", (req, res) => {
  const trust_groups = db.get("trust_groups");
  return res.jsonp(trust_groups);
});

server.get("/trust-service/permission-grant", (req, res) => {
  const query_params = req.query;
  if (!("collaborator_id" in query_params) || !("department_id" in query_params)) res.sendStatus(400);

  const collaborator_id = query_params.collaborator_id;
  const department_id = query_params.department_id;
  const trust_group_permissions = getValues(db.get())["trust_group_permissions"];

  const filtered_permissions = _.filter(trust_group_permissions, (permission) => {
    return permission.collaborator_id === collaborator_id && permission.department_id === department_id;
  });

  return res.jsonp(filtered_permissions);
});

server.put("/domain-service/domain-trust-group", (req, res) => {
  const req_body = req.body;

  if (!("domain_trust_group_id" in req_body) || !("trust_group_id" in req_body)) return res.sendStatus(400);

  const { domain_trust_group_id, trust_group_id } = req_body;

  const domain_trust_mappings = db.get("domain_trust_group");
  const domain_list = db.get("domains");

  const updated_mapping = domain_trust_mappings.find({ id: domain_trust_group_id }).value();

  if (_.isEmpty(updated_mapping)) return res.sendStatus(400);

  const updated_domain = domain_list.find({id: updated_mapping.domain_id}).value();
  updated_mapping.trust_group_id = trust_group_id;
  updated_domain.domain_trust_group_id = updated_mapping.id;
  updated_domain.trust_group_id = trust_group_id;

  domain_trust_mappings.find({ id: domain_trust_group_id }).assign(updated_mapping).write();

  return res.jsonp(updated_domain);
});

server.put("/trust-service/permission-grant", (req, res) => {
  const req_body = req.body;

  if (!("permission_grant_id" in req_body) || !("enabled" in req_body)) res.sendStatus(400);

  const { enabled, permission_grant_id } = req_body;

  const permission_grant_mapping = db.get("trust_group_permissions");

  const updated_mapping = permission_grant_mapping.find({ id: permission_grant_id }).value();

  if (_.isEmpty(updated_mapping)) res.sendStatus(400);

  updated_mapping.enabled = enabled;

  permission_grant_mapping.find({ id: permission_grant_id }).assign(updated_mapping).write();

  return res.jsonp({ enabled: enabled });
});

server.use(router);
server.listen(port, () => {
  console.log(`mock server is up on port ${port}`);
});
