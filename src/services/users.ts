import axios from "../plugins/axios";
import UserTransformer from "../transformers/userTransformer";
import { useOrganizationStore } from "../stores/organization";

const success = (data: object, resolve: any) => {
  if (data) {
    const transformer = UserTransformer.fetchCollection(data);
    const organizationStore = useOrganizationStore();
    organizationStore.setUsers(transformer);
    return resolve(data);
  }
};

const fail = (data: object, reject: any) => {
  return reject(data);
};

export default (params = "") => {
  return new Promise((resolve, reject) => {
    axios
      .get(`api/users${params}`)
      .then((response: { data: { data: object } }) => {
        success(response.data.data, resolve);
      })
      .catch((error: { response: { data: { errors: object } } }) => {
        fail(error.response.data.errors, reject);
      });
  });
};