import qs from "qs";

export default class Service {
  constructor() {}

  protected async $get<T>(api: string, options?: any) {
    let query = "";

    if (options) {
      const mappedArray = Object.entries(options).map(([key, value]) => ({
        key,
        value,
      }));
      mappedArray.map((item, index) => {
        if (index === 0) {
          query += `?${item.key}=${item.value}`;
        } else {
          query += `&${item.key}=${item.value}`;
        }
      });
    }
    return await $fetch<T>(`/api/${api}${query}`);
  }

  protected async $post<T>(api: string, options: any) {
    const formData = new FormData();

    if (options) {
      const mappedArray = Object.entries(options).map(([key, value]) => ({
        key,
        value,
      }));
      mappedArray.map((item) => {
        formData.append(item.key, item.value as string);
      });
    }

    return await $fetch<T>(`/api/${api}`, {
      method: "POST",
      body: formData,
    });
  }

  protected async $put<T>(api: string, options: any) {
    let dataQS = qs.stringify(options);
    return await $fetch<T>(`/api/${api}`, {
      method: "PUT",
      body: dataQS,
    });
  }

  protected async $delete<T>(api: string, options: any) {
    let dataQS = qs.stringify(options);
    return await $fetch<T>(`/api/${api}`, {
      method: "DELETE",
      body: dataQS,
    });
  }
}
