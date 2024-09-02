import {inject, Injectable} from "@angular/core";
import {GatewayConfigure} from "./gateway/gateway.configure";

@Injectable({
  providedIn: 'root'
})
export class MicroserviceConfigService {

  protected gatewayConfigure: GatewayConfigure | undefined;

  public MicroserviceConfigService() {
    this.gatewayConfigure = inject(GatewayConfigure);
  }

  /**
   *
   * @param api
   * @param microservice
   */
  getEndpointFor(api: string, microservice?: string): string {
    let GATEWAY_URL = this.getGatewayUrl();
    if (microservice) {
      return `${GATEWAY_URL}/services/${microservice}/${api}`;
    }
    return `${GATEWAY_URL}${api}`;
  }

  /**
   *
   */
  getGatewayUrl(): string | undefined {
     if (this.gatewayConfigure != undefined) {
       return this.gatewayConfigure.getGatewayUrl();
     }
     return undefined;
  }
}
