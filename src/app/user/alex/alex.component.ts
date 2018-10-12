import { Component ,OnInit,ViewChild,TemplateRef } from '@angular/core';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import {
  NzDropdownContextComponent,
  NzDropdownService,
  NzFormatEmitEvent,
  NzTreeComponent,
  NzTreeNode
} from 'ng-zorro-antd';

@Component({
  selector: 'app-alex',
  templateUrl: './alex.component.html',
  styleUrls: ['./alex.component.css']
})
export class AlexComponent {


  // 文件上传
  fileList = [
    {
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ];
  previewImage = '';
  previewVisible = false;

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }

  constructor(private msg: NzMessageService,private nzDropdownService: NzDropdownService) {}



  // 树组件
  @ViewChild('treeCom') treeCom: NzTreeComponent;
  dropdown: NzDropdownContextComponent;
  // actived node
  activedNode: NzTreeNode;
  nodes = [ {
    title   : '计划工作 0',
    key     : '100',
    author  : '张大佛爷',
    expanded: true,
    children: [
      { title: '代码熟悉 0-0', key: '1000', author: '张大佛爷', isLeaf: true },
      { title: '代码熟悉 0-1', key: '1001', author: '张大佛爷', isLeaf: true }
    ]
  }, {
    title   : '计划工作 1',
    key     : '101',
    author  : '张大佛爷',
    children: [
      { title: '代码熟悉 1-0', key: '1010', author: '张大佛爷', isLeaf: true },
      { title: '代码熟悉 1-1', key: '1011', author: '张大佛爷', isLeaf: true }
    ]
  } ];

  openFolder(data: NzTreeNode | NzFormatEmitEvent): void {
    // do something if u want
    if (data instanceof NzTreeNode) {
      data.isExpanded = !data.isExpanded;
    } else {
      data.node.isExpanded = !data.node.isExpanded;
    }
  }

  activeNode(data: NzFormatEmitEvent): void {
    if (this.activedNode) {
      // delete selectedNodeList(u can do anything u want)
      this.treeCom.nzTreeService.setSelectedNodeList(this.activedNode);
    }
    data.node.isSelected = true;
    this.activedNode = data.node;
    // add selectedNodeList
    this.treeCom.nzTreeService.setSelectedNodeList(this.activedNode);
  }

  contextMenu($event: MouseEvent, template: TemplateRef<void>): void {
    this.dropdown = this.nzDropdownService.create($event, template);
  }

  selectDropdown(type: string): void {
    this.dropdown.close();
    // do something
  }
 
}