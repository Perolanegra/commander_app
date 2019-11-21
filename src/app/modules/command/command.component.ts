import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DefaultScreen } from '../core/defaultScreen';
import { ProductService } from 'src/app/shared/services/product.service';
import { CommandService } from './command.service';
import { AppController } from '../core/appController';
@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss'],
})
export class CommandComponent extends DefaultScreen {
  switchVar: string = 'menu';
  productsTable;

  constructor(protected route: ActivatedRoute,
  private productService: ProductService,
  private appController: AppController,
  private commandService: CommandService) {
    super(route);
  }

  async handleSwitch(newSwitch: string) {
    const loader = await this.appController.presentLoadingDefault();
    try {
      if(newSwitch == 'table') {
        const command = await this.getCommand();
        if(command) {
          const products = await this.productService.getByVisitId(this.visit._id);
          this.productsTable = products;
        }
      }
    } catch (e) {
      this.appController.showError(e);
    } finally {
      loader.dismiss();
      this.switchVar = newSwitch;
    }
  }

  async addToTable(productsAdded) {
    this.productsTable = productsAdded;
    const loader = await this.appController.presentLoadingDefault();
    loader.dismiss();
    loader.onDidDismiss().then(() => {
      this.switchVar = 'table';
    });
  }

  public get products() {
    return this.respResolvers.products;
  }

  public get visit() {
    return this.respResolvers.visit;
  }

  public get QRCodeData() {
    return this.route.snapshot.queryParams;
  }

  public getCommand(): Promise<any> {
    return this.commandService.getByVisitId(this.visit._id).then(resp => resp);
  }


}
