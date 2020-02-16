// import { Defaults, getLogger, Helpers } from '@case-os/commons';
import { Application } from "@feathersjs/feathers";
import feathersLocalstorage from "feathers-localstorage";

// const d = getLogger('feathers/services/user-settings.service.ts');

export const configure: (app: Application<any>) => void = (
  app: Application<any>
): void => {
  //   d("configure");

  const service: any = {
    name: "User Settings",
    serviceUrl: "user-settings"
  };

  //   d(
  //     `Registering service "${service.name}" on "${service.serviceUrl}"`,
  //     service
  //   );

  app.use(
    `/${service.serviceUrl}`,
    feathersLocalstorage({
      id: "_id",
      name: service.serviceUrl,
      storage: window.localStorage
      //   paginate: Defaults.pagination
    })
  );
};
