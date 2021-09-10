import { Injectable } from "@nestjs/common";
import { SanityEvent } from "./models/sanity-event";
import { client } from "./main";

@Injectable()
export class AppService {
  handleSanityEvent(body: SanityEvent): void {
    this.getUpdatedItem(body.ids.updated[0]);
  }

  private getUpdatedItem(id: string) {
    client.getDocument(id).then((res) => {
      console.log(res);
    });

  }
}
