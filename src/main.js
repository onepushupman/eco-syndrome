var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// main.ts
__export(exports, {
  default: () => MyPlugin
});
var import_obsidian = __toModule(require("obsidian"));
var DEFAULT_SETTINGS = {
  mySetting: "default"
};
var MyPlugin = class extends import_obsidian.Plugin {
  onload() {
    return __async(this, null, function* () {
      yield this.loadSettings();
      const ribbonIconEl = this.addRibbonIcon("dice", "Sample Plugin", (evt) => {
        new import_obsidian.Notice("This is a notice!");
      });
      ribbonIconEl.addClass("my-plugin-ribbon-class");
      const statusBarItemEl = this.addStatusBarItem();
      statusBarItemEl.setText("Status Bar Text");
      this.addCommand({
        id: "open-sample-modal-simple",
        name: "Open sample modal (simple)",
        callback: () => {
          new SampleModal(this.app).open();
        }
      });
      this.addCommand({
        id: "sample-editor-command",
        name: "Sample editor command",
        editorCallback: (editor, view) => {
          console.log(editor.getSelection());
          editor.replaceSelection("Sample Editor Command");
        }
      });
      this.addCommand({
        id: "open-sample-modal-complex",
        name: "Open sample modal (complex)",
        checkCallback: (checking) => {
          const markdownView = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
          if (markdownView) {
            if (!checking) {
              new SampleModal(this.app).open();
            }
            return true;
          }
        }
      });
      this.addSettingTab(new SampleSettingTab(this.app, this));
      this.registerDomEvent(document, "click", (evt) => {
        console.log("click", evt);
      });
      this.registerInterval(window.setInterval(() => console.log("setInterval"), 5 * 60 * 1e3));
    });
  }
  onunload() {
  }
  loadSettings() {
    return __async(this, null, function* () {
      this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
    });
  }
  saveSettings() {
    return __async(this, null, function* () {
      yield this.saveData(this.settings);
    });
  }
};
var SampleModal = class extends import_obsidian.Modal {
  constructor(app) {
    super(app);
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.setText("Woah!");
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};
var SampleSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Settings for my awesome plugin." });
    new import_obsidian.Setting(containerEl).setName("Setting #1").setDesc("It's a secret").addText((text) => text.setPlaceholder("Enter your secret").setValue(this.plugin.settings.mySetting).onChange((value) => __async(this, null, function* () {
      console.log("Secret: " + value);
      this.plugin.settings.mySetting = value;
      yield this.plugin.saveSettings();
    })));
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQXBwLCBFZGl0b3IsIE1hcmtkb3duVmlldywgTW9kYWwsIE5vdGljZSwgUGx1Z2luLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nIH0gZnJvbSAnb2JzaWRpYW4nO1xyXG5cclxuLy8gUmVtZW1iZXIgdG8gcmVuYW1lIHRoZXNlIGNsYXNzZXMgYW5kIGludGVyZmFjZXMhXHJcblxyXG5pbnRlcmZhY2UgTXlQbHVnaW5TZXR0aW5ncyB7XHJcblx0bXlTZXR0aW5nOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IERFRkFVTFRfU0VUVElOR1M6IE15UGx1Z2luU2V0dGluZ3MgPSB7XHJcblx0bXlTZXR0aW5nOiAnZGVmYXVsdCdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xyXG5cdHNldHRpbmdzOiBNeVBsdWdpblNldHRpbmdzO1xyXG5cclxuXHRhc3luYyBvbmxvYWQoKSB7XHJcblx0XHRhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xyXG5cclxuXHRcdC8vIFRoaXMgY3JlYXRlcyBhbiBpY29uIGluIHRoZSBsZWZ0IHJpYmJvbi5cclxuXHRcdGNvbnN0IHJpYmJvbkljb25FbCA9IHRoaXMuYWRkUmliYm9uSWNvbignZGljZScsICdTYW1wbGUgUGx1Z2luJywgKGV2dDogTW91c2VFdmVudCkgPT4ge1xyXG5cdFx0XHQvLyBDYWxsZWQgd2hlbiB0aGUgdXNlciBjbGlja3MgdGhlIGljb24uXHJcblx0XHRcdG5ldyBOb3RpY2UoJ1RoaXMgaXMgYSBub3RpY2UhJyk7XHJcblx0XHR9KTtcclxuXHRcdC8vIFBlcmZvcm0gYWRkaXRpb25hbCB0aGluZ3Mgd2l0aCB0aGUgcmliYm9uXHJcblx0XHRyaWJib25JY29uRWwuYWRkQ2xhc3MoJ215LXBsdWdpbi1yaWJib24tY2xhc3MnKTtcclxuXHJcblx0XHQvLyBUaGlzIGFkZHMgYSBzdGF0dXMgYmFyIGl0ZW0gdG8gdGhlIGJvdHRvbSBvZiB0aGUgYXBwLiBEb2VzIG5vdCB3b3JrIG9uIG1vYmlsZSBhcHBzLlxyXG5cdFx0Y29uc3Qgc3RhdHVzQmFySXRlbUVsID0gdGhpcy5hZGRTdGF0dXNCYXJJdGVtKCk7XHJcblx0XHRzdGF0dXNCYXJJdGVtRWwuc2V0VGV4dCgnU3RhdHVzIEJhciBUZXh0Jyk7XHJcblxyXG5cdFx0Ly8gVGhpcyBhZGRzIGEgc2ltcGxlIGNvbW1hbmQgdGhhdCBjYW4gYmUgdHJpZ2dlcmVkIGFueXdoZXJlXHJcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xyXG5cdFx0XHRpZDogJ29wZW4tc2FtcGxlLW1vZGFsLXNpbXBsZScsXHJcblx0XHRcdG5hbWU6ICdPcGVuIHNhbXBsZSBtb2RhbCAoc2ltcGxlKScsXHJcblx0XHRcdGNhbGxiYWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0bmV3IFNhbXBsZU1vZGFsKHRoaXMuYXBwKS5vcGVuKCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0Ly8gVGhpcyBhZGRzIGFuIGVkaXRvciBjb21tYW5kIHRoYXQgY2FuIHBlcmZvcm0gc29tZSBvcGVyYXRpb24gb24gdGhlIGN1cnJlbnQgZWRpdG9yIGluc3RhbmNlXHJcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xyXG5cdFx0XHRpZDogJ3NhbXBsZS1lZGl0b3ItY29tbWFuZCcsXHJcblx0XHRcdG5hbWU6ICdTYW1wbGUgZWRpdG9yIGNvbW1hbmQnLFxyXG5cdFx0XHRlZGl0b3JDYWxsYmFjazogKGVkaXRvcjogRWRpdG9yLCB2aWV3OiBNYXJrZG93blZpZXcpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlZGl0b3IuZ2V0U2VsZWN0aW9uKCkpO1xyXG5cdFx0XHRcdGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKCdTYW1wbGUgRWRpdG9yIENvbW1hbmQnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHQvLyBUaGlzIGFkZHMgYSBjb21wbGV4IGNvbW1hbmQgdGhhdCBjYW4gY2hlY2sgd2hldGhlciB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgYXBwIGFsbG93cyBleGVjdXRpb24gb2YgdGhlIGNvbW1hbmRcclxuXHRcdHRoaXMuYWRkQ29tbWFuZCh7XHJcblx0XHRcdGlkOiAnb3Blbi1zYW1wbGUtbW9kYWwtY29tcGxleCcsXHJcblx0XHRcdG5hbWU6ICdPcGVuIHNhbXBsZSBtb2RhbCAoY29tcGxleCknLFxyXG5cdFx0XHRjaGVja0NhbGxiYWNrOiAoY2hlY2tpbmc6IGJvb2xlYW4pID0+IHtcclxuXHRcdFx0XHQvLyBDb25kaXRpb25zIHRvIGNoZWNrXHJcblx0XHRcdFx0Y29uc3QgbWFya2Rvd25WaWV3ID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KTtcclxuXHRcdFx0XHRpZiAobWFya2Rvd25WaWV3KSB7XHJcblx0XHRcdFx0XHQvLyBJZiBjaGVja2luZyBpcyB0cnVlLCB3ZSdyZSBzaW1wbHkgXCJjaGVja2luZ1wiIGlmIHRoZSBjb21tYW5kIGNhbiBiZSBydW4uXHJcblx0XHRcdFx0XHQvLyBJZiBjaGVja2luZyBpcyBmYWxzZSwgdGhlbiB3ZSB3YW50IHRvIGFjdHVhbGx5IHBlcmZvcm0gdGhlIG9wZXJhdGlvbi5cclxuXHRcdFx0XHRcdGlmICghY2hlY2tpbmcpIHtcclxuXHRcdFx0XHRcdFx0bmV3IFNhbXBsZU1vZGFsKHRoaXMuYXBwKS5vcGVuKCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gVGhpcyBjb21tYW5kIHdpbGwgb25seSBzaG93IHVwIGluIENvbW1hbmQgUGFsZXR0ZSB3aGVuIHRoZSBjaGVjayBmdW5jdGlvbiByZXR1cm5zIHRydWVcclxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gVGhpcyBhZGRzIGEgc2V0dGluZ3MgdGFiIHNvIHRoZSB1c2VyIGNhbiBjb25maWd1cmUgdmFyaW91cyBhc3BlY3RzIG9mIHRoZSBwbHVnaW5cclxuXHRcdHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgU2FtcGxlU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xyXG5cclxuXHRcdC8vIElmIHRoZSBwbHVnaW4gaG9va3MgdXAgYW55IGdsb2JhbCBET00gZXZlbnRzIChvbiBwYXJ0cyBvZiB0aGUgYXBwIHRoYXQgZG9lc24ndCBiZWxvbmcgdG8gdGhpcyBwbHVnaW4pXHJcblx0XHQvLyBVc2luZyB0aGlzIGZ1bmN0aW9uIHdpbGwgYXV0b21hdGljYWxseSByZW1vdmUgdGhlIGV2ZW50IGxpc3RlbmVyIHdoZW4gdGhpcyBwbHVnaW4gaXMgZGlzYWJsZWQuXHJcblx0XHR0aGlzLnJlZ2lzdGVyRG9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycsIChldnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2NsaWNrJywgZXZ0KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIFdoZW4gcmVnaXN0ZXJpbmcgaW50ZXJ2YWxzLCB0aGlzIGZ1bmN0aW9uIHdpbGwgYXV0b21hdGljYWxseSBjbGVhciB0aGUgaW50ZXJ2YWwgd2hlbiB0aGUgcGx1Z2luIGlzIGRpc2FibGVkLlxyXG5cdFx0dGhpcy5yZWdpc3RlckludGVydmFsKHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiBjb25zb2xlLmxvZygnc2V0SW50ZXJ2YWwnKSwgNSAqIDYwICogMTAwMCkpO1xyXG5cdH1cclxuXHJcblx0b251bmxvYWQoKSB7XHJcblxyXG5cdH1cclxuXHJcblx0YXN5bmMgbG9hZFNldHRpbmdzKCkge1xyXG5cdFx0dGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfU0VUVElOR1MsIGF3YWl0IHRoaXMubG9hZERhdGEoKSk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBzYXZlU2V0dGluZ3MoKSB7XHJcblx0XHRhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgU2FtcGxlTW9kYWwgZXh0ZW5kcyBNb2RhbCB7XHJcblx0Y29uc3RydWN0b3IoYXBwOiBBcHApIHtcclxuXHRcdHN1cGVyKGFwcCk7XHJcblx0fVxyXG5cclxuXHRvbk9wZW4oKSB7XHJcblx0XHRjb25zdCB7Y29udGVudEVsfSA9IHRoaXM7XHJcblx0XHRjb250ZW50RWwuc2V0VGV4dCgnV29haCEnKTtcclxuXHR9XHJcblxyXG5cdG9uQ2xvc2UoKSB7XHJcblx0XHRjb25zdCB7Y29udGVudEVsfSA9IHRoaXM7XHJcblx0XHRjb250ZW50RWwuZW1wdHkoKTtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFNhbXBsZVNldHRpbmdUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcclxuXHRwbHVnaW46IE15UGx1Z2luO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBNeVBsdWdpbikge1xyXG5cdFx0c3VwZXIoYXBwLCBwbHVnaW4pO1xyXG5cdFx0dGhpcy5wbHVnaW4gPSBwbHVnaW47XHJcblx0fVxyXG5cclxuXHRkaXNwbGF5KCk6IHZvaWQge1xyXG5cdFx0Y29uc3Qge2NvbnRhaW5lckVsfSA9IHRoaXM7XHJcblxyXG5cdFx0Y29udGFpbmVyRWwuZW1wdHkoKTtcclxuXHJcblx0XHRjb250YWluZXJFbC5jcmVhdGVFbCgnaDInLCB7dGV4dDogJ1NldHRpbmdzIGZvciBteSBhd2Vzb21lIHBsdWdpbi4nfSk7XHJcblxyXG5cdFx0bmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcblx0XHRcdC5zZXROYW1lKCdTZXR0aW5nICMxJylcclxuXHRcdFx0LnNldERlc2MoJ0l0XFwncyBhIHNlY3JldCcpXHJcblx0XHRcdC5hZGRUZXh0KHRleHQgPT4gdGV4dFxyXG5cdFx0XHRcdC5zZXRQbGFjZWhvbGRlcignRW50ZXIgeW91ciBzZWNyZXQnKVxyXG5cdFx0XHRcdC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5teVNldHRpbmcpXHJcblx0XHRcdFx0Lm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ1NlY3JldDogJyArIHZhbHVlKTtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLm15U2V0dGluZyA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0YXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcblx0XHRcdFx0fSkpO1xyXG5cdH1cclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBNEY7QUFRNUYsSUFBTSxtQkFBcUM7QUFBQSxFQUMxQyxXQUFXO0FBQUE7QUFHWiw2QkFBc0MsdUJBQU87QUFBQSxFQUd0QyxTQUFTO0FBQUE7QUFDZCxZQUFNLEtBQUs7QUFHWCxZQUFNLGVBQWUsS0FBSyxjQUFjLFFBQVEsaUJBQWlCLENBQUMsUUFBb0I7QUFFckYsWUFBSSx1QkFBTztBQUFBO0FBR1osbUJBQWEsU0FBUztBQUd0QixZQUFNLGtCQUFrQixLQUFLO0FBQzdCLHNCQUFnQixRQUFRO0FBR3hCLFdBQUssV0FBVztBQUFBLFFBQ2YsSUFBSTtBQUFBLFFBQ0osTUFBTTtBQUFBLFFBQ04sVUFBVSxNQUFNO0FBQ2YsY0FBSSxZQUFZLEtBQUssS0FBSztBQUFBO0FBQUE7QUFJNUIsV0FBSyxXQUFXO0FBQUEsUUFDZixJQUFJO0FBQUEsUUFDSixNQUFNO0FBQUEsUUFDTixnQkFBZ0IsQ0FBQyxRQUFnQixTQUF1QjtBQUN2RCxrQkFBUSxJQUFJLE9BQU87QUFDbkIsaUJBQU8saUJBQWlCO0FBQUE7QUFBQTtBQUkxQixXQUFLLFdBQVc7QUFBQSxRQUNmLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLGVBQWUsQ0FBQyxhQUFzQjtBQUVyQyxnQkFBTSxlQUFlLEtBQUssSUFBSSxVQUFVLG9CQUFvQjtBQUM1RCxjQUFJLGNBQWM7QUFHakIsZ0JBQUksQ0FBQyxVQUFVO0FBQ2Qsa0JBQUksWUFBWSxLQUFLLEtBQUs7QUFBQTtBQUkzQixtQkFBTztBQUFBO0FBQUE7QUFBQTtBQU1WLFdBQUssY0FBYyxJQUFJLGlCQUFpQixLQUFLLEtBQUs7QUFJbEQsV0FBSyxpQkFBaUIsVUFBVSxTQUFTLENBQUMsUUFBb0I7QUFDN0QsZ0JBQVEsSUFBSSxTQUFTO0FBQUE7QUFJdEIsV0FBSyxpQkFBaUIsT0FBTyxZQUFZLE1BQU0sUUFBUSxJQUFJLGdCQUFnQixJQUFJLEtBQUs7QUFBQTtBQUFBO0FBQUEsRUFHckYsV0FBVztBQUFBO0FBQUEsRUFJTCxlQUFlO0FBQUE7QUFDcEIsV0FBSyxXQUFXLE9BQU8sT0FBTyxJQUFJLGtCQUFrQixNQUFNLEtBQUs7QUFBQTtBQUFBO0FBQUEsRUFHMUQsZUFBZTtBQUFBO0FBQ3BCLFlBQU0sS0FBSyxTQUFTLEtBQUs7QUFBQTtBQUFBO0FBQUE7QUFJM0IsZ0NBQTBCLHNCQUFNO0FBQUEsRUFDL0IsWUFBWSxLQUFVO0FBQ3JCLFVBQU07QUFBQTtBQUFBLEVBR1AsU0FBUztBQUNSLFVBQU0sRUFBQyxjQUFhO0FBQ3BCLGNBQVUsUUFBUTtBQUFBO0FBQUEsRUFHbkIsVUFBVTtBQUNULFVBQU0sRUFBQyxjQUFhO0FBQ3BCLGNBQVU7QUFBQTtBQUFBO0FBSVoscUNBQStCLGlDQUFpQjtBQUFBLEVBRy9DLFlBQVksS0FBVSxRQUFrQjtBQUN2QyxVQUFNLEtBQUs7QUFDWCxTQUFLLFNBQVM7QUFBQTtBQUFBLEVBR2YsVUFBZ0I7QUFDZixVQUFNLEVBQUMsZ0JBQWU7QUFFdEIsZ0JBQVk7QUFFWixnQkFBWSxTQUFTLE1BQU0sRUFBQyxNQUFNO0FBRWxDLFFBQUksd0JBQVEsYUFDVixRQUFRLGNBQ1IsUUFBUSxpQkFDUixRQUFRLFVBQVEsS0FDZixlQUFlLHFCQUNmLFNBQVMsS0FBSyxPQUFPLFNBQVMsV0FDOUIsU0FBUyxDQUFPLFVBQVU7QUFDMUIsY0FBUSxJQUFJLGFBQWE7QUFDekIsV0FBSyxPQUFPLFNBQVMsWUFBWTtBQUNqQyxZQUFNLEtBQUssT0FBTztBQUFBO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
