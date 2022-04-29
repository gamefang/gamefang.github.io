window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this._Image2_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","button2_png"),
					new eui.SetProperty("_Image1","scale9Grid",new egret.Rectangle(36,31,143,13))
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image2","",2,"labelDisplay"),
					new eui.SetProperty("_Image1","scale9Grid",new egret.Rectangle(20,18,18,8)),
					new eui.SetProperty("_Image1","source","button2_png"),
					new eui.SetProperty("labelDisplay","textColor",0xffffff),
					new eui.SetProperty("iconDisplay","source","")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5),
					new eui.SetProperty("_Image1","source","button2_png")
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(26,23,159,22);
		t.source = "button2_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67;
		t.scale9Grid = new egret.Rectangle(187,6,106,43);
		t.source = "light_png";
		t.width = 212;
		t.x = 2;
		t.y = 2;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "SimHei";
		t.left = 8;
		t.right = 8;
		t.size = 24;
		t.textAlign = "center";
		t.textColor = 0x8be2ff;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin2.exml'] = window.skins.ButtonSkin2 = (function (_super) {
	__extends(ButtonSkin2, _super);
	function ButtonSkin2() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","scale9Grid",new egret.Rectangle(36,31,143,13)),
					new eui.SetProperty("_Image1","source","button1_idle_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","scale9Grid",new egret.Rectangle(20,18,18,8)),
					new eui.SetProperty("_Image1","source","button1_down_png"),
					new eui.SetProperty("labelDisplay","textColor",0xffffff),
					new eui.SetProperty("iconDisplay","source","")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5),
					new eui.SetProperty("_Image1","source","button1_idle_png")
				])
		];
	}
	var _proto = ButtonSkin2.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(26,23,159,22);
		t.source = "button1_idle_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.anchorOffsetY = 0;
		t.bottom = 2;
		t.fontFamily = "SimHei";
		t.left = 8;
		t.right = 11;
		t.size = 36;
		t.textAlign = "center";
		t.textColor = 0x8be2ff;
		t.top = 24;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin2;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "SimHei";
		t.left = 15;
		t.right = 5;
		t.size = 30;
		t.text = "标题";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 13;
		t.horizontalCenter = 0;
		t.label = "确定";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(10,10,11,11);
		t.source = "pb_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(11,3,8,23);
		t.source = "pb_thumb1_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x8be2ff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin2.exml'] = window.skins.ProgressBarSkin2 = (function (_super) {
	__extends(ProgressBarSkin2, _super);
	function ProgressBarSkin2() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin2.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(10,10,11,11);
		t.source = "pb_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(11,3,8,23);
		t.source = "pb_thumb2_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x8be2ff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin2;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/ui_pages/MainPage.exml'] = window.MainPage = (function (_super) {
	__extends(MainPage, _super);
	function MainPage() {
		_super.call(this);
		this.skinParts = ["anim_ring_loop","anim_hp_too_low","anim_mon_too_much","img_bg","img_EXP_frame","img_EXP_icon","lb_EXP","lb_EXP_value","g_EXP","img_GOLD_frame","lb_GOLD","lb_GOLD_value","g_GOLD","img_screen_frame","img_name_bg","lb_name","lb_msg","lb_DIS","lb_DIS_value","lb_DIS_unit","g_DIS","g_screen","img_HP_frame","lb_HP","lb_HP_value","lb_HP_unit","pb_HP","btn_HP_skill","g_HP","img_MON_frame","lb_MON","lb_MON_value","lb_MON_unit","pb_MON","btn_MON_skill","g_MON","btn_update","btn_GOLD_skill","btn_sys","g_alive","lb_title","btn_born","g_die","r_tip_bg","img_tip_frame","lb_tip_text","g_tip","debug_reset","debug_hour_past"];
		
		this.height = 1136;
		this.width = 640;
		this.anim_ring_loop_i();
		this.anim_hp_too_low_i();
		this.anim_mon_too_much_i();
		this.elementsContent = [this.img_bg_i(),this.g_alive_i(),this.g_die_i(),this.g_tip_i(),this.debug_reset_i(),this.debug_hour_past_i()];
		
		eui.Binding.$bindProperties(this, ["img_EXP_icon"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"rotation");
		eui.Binding.$bindProperties(this, [360],[],this._Object2,"rotation");
		eui.Binding.$bindProperties(this, ["g_HP"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [0.2],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, ["g_MON"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [0.2],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object8,"alpha");
	}
	var _proto = MainPage.prototype;

	_proto.anim_ring_loop_i = function () {
		var t = new egret.tween.TweenGroup();
		this.anim_ring_loop = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 6000;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto.anim_hp_too_low_i = function () {
		var t = new egret.tween.TweenGroup();
		this.anim_hp_too_low = t;
		t.items = [this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To2_i(),this._To3_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto.anim_mon_too_much_i = function () {
		var t = new egret.tween.TweenGroup();
		this.anim_mon_too_much = t;
		t.items = [this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set3_i(),this._To4_i(),this._To5_i()];
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.height = 1136;
		t.source = "main_bg_png";
		t.width = 640;
		return t;
	};
	_proto.g_alive_i = function () {
		var t = new eui.Group();
		this.g_alive = t;
		t.height = 1136;
		t.width = 640;
		t.elementsContent = [this.g_EXP_i(),this.g_GOLD_i(),this.g_screen_i(),this.g_HP_i(),this.g_MON_i(),this.btn_update_i(),this.btn_GOLD_skill_i(),this.btn_sys_i()];
		return t;
	};
	_proto.g_EXP_i = function () {
		var t = new eui.Group();
		this.g_EXP = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.width = 315;
		t.x = -2;
		t.y = -2;
		t.elementsContent = [this.img_EXP_frame_i(),this.img_EXP_icon_i(),this.lb_EXP_i(),this.lb_EXP_value_i()];
		return t;
	};
	_proto.img_EXP_frame_i = function () {
		var t = new eui.Image();
		this.img_EXP_frame = t;
		t.alpha = 0.7;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(49,31,12,99);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "frame1_png";
		t.touchEnabled = true;
		return t;
	};
	_proto.img_EXP_icon_i = function () {
		var t = new eui.Image();
		this.img_EXP_icon = t;
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30.5;
		t.source = "exp_icon_png";
		t.touchEnabled = false;
		t.x = 42;
		t.y = 45.5;
		return t;
	};
	_proto.lb_EXP_i = function () {
		var t = new eui.Label();
		this.lb_EXP = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 37;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "纠缠度：";
		t.textColor = 0x8be2ff;
		t.touchEnabled = false;
		t.width = 115;
		t.x = 75.48;
		t.y = 32;
		return t;
	};
	_proto.lb_EXP_value_i = function () {
		var t = new eui.Label();
		this.lb_EXP_value = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 31;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "30.2";
		t.textColor = 0x8be2ff;
		t.touchEnabled = false;
		t.width = 94;
		t.x = 176.67;
		t.y = 32;
		return t;
	};
	_proto.g_GOLD_i = function () {
		var t = new eui.Group();
		this.g_GOLD = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 99;
		t.width = 398;
		t.x = 264;
		t.y = -6;
		t.elementsContent = [this.img_GOLD_frame_i(),this.lb_GOLD_i(),this.lb_GOLD_value_i()];
		return t;
	};
	_proto.img_GOLD_frame_i = function () {
		var t = new eui.Image();
		this.img_GOLD_frame = t;
		t.alpha = 0.7;
		t.scale9Grid = new egret.Rectangle(49,31,12,99);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "frame2_png";
		t.touchEnabled = true;
		t.x = 23;
		t.y = 6;
		return t;
	};
	_proto.lb_GOLD_i = function () {
		var t = new eui.Label();
		this.lb_GOLD = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 39;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "时间晶体：";
		t.textColor = 0x8be2ff;
		t.touchEnabled = false;
		t.width = 130;
		t.x = 87.83;
		t.y = 16.5;
		return t;
	};
	_proto.lb_GOLD_value_i = function () {
		var t = new eui.Label();
		this.lb_GOLD_value = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 33;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "99999999";
		t.textColor = 0x8be2ff;
		t.touchEnabled = false;
		t.width = 159;
		t.x = 203.89;
		t.y = 18.5;
		return t;
	};
	_proto.g_screen_i = function () {
		var t = new eui.Group();
		this.g_screen = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 536;
		t.width = 640;
		t.x = 0;
		t.y = 84;
		t.elementsContent = [this.img_screen_frame_i(),this.img_name_bg_i(),this.lb_name_i(),this.lb_msg_i(),this.g_DIS_i()];
		return t;
	};
	_proto.img_screen_frame_i = function () {
		var t = new eui.Image();
		this.img_screen_frame = t;
		t.alpha = 0.7;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(49,31,12,99);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "frame3_png";
		t.touchEnabled = true;
		t.y = 91;
		return t;
	};
	_proto.img_name_bg_i = function () {
		var t = new eui.Image();
		this.img_name_bg = t;
		t.alpha = 0.7;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(49,31,12,99);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "frame4_png";
		t.touchEnabled = true;
		t.x = 30;
		t.y = 98;
		return t;
	};
	_proto.lb_name_i = function () {
		var t = new eui.Label();
		this.lb_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 39;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "双生火焰";
		t.textAlign = "center";
		t.textColor = 0x8be2ff;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 167;
		t.x = 64.33;
		t.y = 107;
		return t;
	};
	_proto.lb_msg_i = function () {
		var t = new eui.Label();
		this.lb_msg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 312;
		t.lineSpacing = 15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = ">>>连接建立成功！\n>>>已连接20天\n3\n4\n5\n6\n7\n8\n9";
		t.textAlign = "left";
		t.textColor = 0x8be2ff;
		t.touchEnabled = false;
		t.verticalAlign = "top";
		t.width = 440;
		t.x = 118;
		t.y = 188;
		return t;
	};
	_proto.g_DIS_i = function () {
		var t = new eui.Group();
		this.g_DIS = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.width = 227;
		t.x = 373;
		t.y = 113;
		t.elementsContent = [this.lb_DIS_i(),this.lb_DIS_value_i(),this.lb_DIS_unit_i()];
		return t;
	};
	_proto.lb_DIS_i = function () {
		var t = new eui.Label();
		this.lb_DIS = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 29;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "距离";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 56;
		t.x = 22;
		t.y = 17;
		return t;
	};
	_proto.lb_DIS_value_i = function () {
		var t = new eui.Label();
		this.lb_DIS_value = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "6174";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 62;
		t.x = 81.83;
		t.y = 15.5;
		return t;
	};
	_proto.lb_DIS_unit_i = function () {
		var t = new eui.Label();
		this.lb_DIS_unit = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 29;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "光年";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 56;
		t.x = 148;
		t.y = 17;
		return t;
	};
	_proto.g_HP_i = function () {
		var t = new eui.Group();
		this.g_HP = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 312;
		t.width = 303;
		t.x = 24;
		t.y = 631;
		t.elementsContent = [this.img_HP_frame_i(),this.lb_HP_i(),this.lb_HP_value_i(),this.lb_HP_unit_i(),this.pb_HP_i(),this.btn_HP_skill_i()];
		return t;
	};
	_proto.img_HP_frame_i = function () {
		var t = new eui.Image();
		this.img_HP_frame = t;
		t.alpha = 0.7;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 275;
		t.scale9Grid = new egret.Rectangle(31,32,53,52);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "frame5_png";
		t.touchEnabled = true;
		t.width = 275;
		t.x = 17;
		t.y = 17;
		return t;
	};
	_proto.lb_HP_i = function () {
		var t = new eui.Label();
		this.lb_HP = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 31;
		t.size = 24;
		t.text = "运转速率";
		t.textColor = 0x8be2ff;
		t.touchEnabled = false;
		t.width = 112;
		t.x = 107.48;
		t.y = 61;
		return t;
	};
	_proto.lb_HP_value_i = function () {
		var t = new eui.Label();
		this.lb_HP_value = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35.33;
		t.size = 20;
		t.text = "495";
		t.textAlign = "right";
		t.textColor = 0x8be2ff;
		t.touchEnabled = false;
		t.width = 54.67;
		t.x = 80.06;
		t.y = 102;
		return t;
	};
	_proto.lb_HP_unit_i = function () {
		var t = new eui.Label();
		this.lb_HP_unit = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 26;
		t.size = 20;
		t.text = "光年/日";
		t.textColor = 0x8be2ff;
		t.touchEnabled = false;
		t.width = 106;
		t.x = 141.07;
		t.y = 102;
		return t;
	};
	_proto.pb_HP_i = function () {
		var t = new eui.ProgressBar();
		this.pb_HP = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.maximum = 495;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 211;
		t.x = 48;
		t.y = 137;
		return t;
	};
	_proto.btn_HP_skill_i = function () {
		var t = new eui.Button();
		this.btn_HP_skill = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76;
		t.label = "扭曲时间";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 218;
		t.x = 45.5;
		t.y = 182.5;
		return t;
	};
	_proto.g_MON_i = function () {
		var t = new eui.Group();
		this.g_MON = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 324;
		t.width = 307;
		t.x = 318;
		t.y = 619;
		t.elementsContent = [this.img_MON_frame_i(),this.lb_MON_i(),this.lb_MON_value_i(),this.lb_MON_unit_i(),this.pb_MON_i(),this.btn_MON_skill_i()];
		return t;
	};
	_proto.img_MON_frame_i = function () {
		var t = new eui.Image();
		this.img_MON_frame = t;
		t.alpha = 0.7;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 275;
		t.scale9Grid = new egret.Rectangle(36,31,48,53);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "frame5_png";
		t.touchEnabled = true;
		t.width = 275;
		t.x = 11;
		t.y = 28;
		return t;
	};
	_proto.lb_MON_i = function () {
		var t = new eui.Label();
		this.lb_MON = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 30;
		t.size = 24;
		t.text = "熵";
		t.textColor = 0x8be2ff;
		t.touchEnabled = false;
		t.width = 35;
		t.x = 137;
		t.y = 72;
		return t;
	};
	_proto.lb_MON_value_i = function () {
		var t = new eui.Label();
		this.lb_MON_value = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "99";
		t.textAlign = "right";
		t.textColor = 0x8be2ff;
		t.touchEnabled = false;
		t.width = 105;
		t.x = 34.83;
		t.y = 114;
		return t;
	};
	_proto.lb_MON_unit_i = function () {
		var t = new eui.Label();
		this.lb_MON_unit = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 27;
		t.size = 20;
		t.text = "纳特";
		t.textColor = 0x8be2ff;
		t.touchEnabled = false;
		t.width = 64;
		t.x = 147.04;
		t.y = 114;
		return t;
	};
	_proto.pb_MON_i = function () {
		var t = new eui.ProgressBar();
		this.pb_MON = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.maximum = 6174;
		t.skinName = "skins.ProgressBarSkin2";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 211;
		t.x = 42;
		t.y = 149;
		return t;
	};
	_proto.btn_MON_skill_i = function () {
		var t = new eui.Button();
		this.btn_MON_skill = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76;
		t.label = "注入晶体";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 218;
		t.x = 40;
		t.y = 196;
		return t;
	};
	_proto.btn_update_i = function () {
		var t = new eui.Button();
		this.btn_update = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 88;
		t.label = "刷新";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "skins.ButtonSkin2";
		t.width = 220;
		t.x = 0;
		t.y = 1136;
		return t;
	};
	_proto.btn_GOLD_skill_i = function () {
		var t = new eui.Button();
		this.btn_GOLD_skill = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 88;
		t.height = 88;
		t.label = "FRB通信";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "skins.ButtonSkin2";
		t.width = 220;
		t.x = 211;
		t.y = 1136;
		return t;
	};
	_proto.btn_sys_i = function () {
		var t = new eui.Button();
		this.btn_sys = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 88;
		t.label = "系统";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "skins.ButtonSkin2";
		t.width = 220;
		t.x = 421.51;
		t.y = 1136;
		return t;
	};
	_proto.g_die_i = function () {
		var t = new eui.Group();
		this.g_die = t;
		t.height = 1136;
		t.visible = false;
		t.width = 640;
		t.elementsContent = [this.lb_title_i(),this.btn_born_i()];
		return t;
	};
	_proto.lb_title_i = function () {
		var t = new eui.Label();
		this.lb_title = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 64;
		t.text = "双生火焰";
		t.textColor = 0x8be2ff;
		t.x = 190;
		t.y = 250;
		return t;
	};
	_proto.btn_born_i = function () {
		var t = new eui.Button();
		this.btn_born = t;
		t.horizontalCenter = 0;
		t.label = "启动仪器";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 400;
		t.x = 270;
		t.y = 900;
		return t;
	};
	_proto.g_tip_i = function () {
		var t = new eui.Group();
		this.g_tip = t;
		t.alpha = 0.8;
		t.height = 280;
		t.visible = false;
		t.width = 450;
		t.x = 95;
		t.y = 290;
		t.elementsContent = [this.r_tip_bg_i(),this.img_tip_frame_i(),this.lb_tip_text_i()];
		return t;
	};
	_proto.r_tip_bg_i = function () {
		var t = new eui.Rect();
		this.r_tip_bg = t;
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.height = 253.33;
		t.width = 422;
		t.x = 13.33;
		t.y = 12;
		return t;
	};
	_proto.img_tip_frame_i = function () {
		var t = new eui.Image();
		this.img_tip_frame = t;
		t.height = 280;
		t.scale9Grid = new egret.Rectangle(33,26,55,59);
		t.source = "frame5_png";
		t.width = 450;
		return t;
	};
	_proto.lb_tip_text_i = function () {
		var t = new eui.Label();
		this.lb_tip_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 252;
		t.lineSpacing = 5;
		t.size = 24;
		t.text = "保持一定的运转速率是与双生火焰建立连接的前提。速率会随时间流逝逐渐变慢，如果停止运转，三天後将与双生火焰断开连接。可通过扭曲时间来提升速率，但有可能会引发熵增。";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 391.34;
		t.x = 32;
		t.y = 14;
		return t;
	};
	_proto.debug_reset_i = function () {
		var t = new eui.Rect();
		this.debug_reset = t;
		t.alpha = 0.5;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 90;
		t.ellipseWidth = 90;
		t.fillColor = 0xff0000;
		t.height = 32;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 32;
		t.x = 585.72;
		t.y = 987.81;
		return t;
	};
	_proto.debug_hour_past_i = function () {
		var t = new eui.Rect();
		this.debug_hour_past = t;
		t.alpha = 0.5;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 90;
		t.ellipseWidth = 90;
		t.fillColor = 0xffb400;
		t.height = 32;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 32;
		t.x = 534.48;
		t.y = 987.72;
		return t;
	};
	return MainPage;
})(eui.Skin);generateEUI.paths['resource/ui_pages/NameInput.exml'] = window.NameInput = (function (_super) {
	__extends(NameInput, _super);
	function NameInput() {
		_super.call(this);
		this.skinParts = ["erect_bg","eimage_bg","elabel_title_text","elabel_error","eimage_name_bg","eedtext_name","ebtn_ok","ebtn_close"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.erect_bg_i(),this.eimage_bg_i(),this.elabel_title_text_i(),this.elabel_error_i(),this.eimage_name_bg_i(),this.eedtext_name_i(),this.ebtn_ok_i(),this.ebtn_close_i()];
	}
	var _proto = NameInput.prototype;

	_proto.erect_bg_i = function () {
		var t = new eui.Rect();
		this.erect_bg = t;
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0x000000;
		t.height = 275.75;
		t.touchEnabled = true;
		t.width = 483.94;
		t.x = 78.79;
		t.y = 372.13;
		return t;
	};
	_proto.eimage_bg_i = function () {
		var t = new eui.Image();
		this.eimage_bg = t;
		t.height = 300;
		t.scale9Grid = new egret.Rectangle(32,34,56,46);
		t.source = "frame5_png";
		t.width = 510;
		t.x = 65;
		t.y = 360;
		return t;
	};
	_proto.elabel_title_text_i = function () {
		var t = new eui.Label();
		this.elabel_title_text = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 1;
		t.size = 36;
		t.text = "Ta叫什么名字？";
		t.textAlign = "center";
		t.textColor = 0x8be2ff;
		t.touchEnabled = false;
		t.y = 393.95;
		return t;
	};
	_proto.elabel_error_i = function () {
		var t = new eui.Label();
		this.elabel_error = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "名称内含有非法字符";
		t.textAlign = "center";
		t.textColor = 0xff0000;
		t.touchEnabled = false;
		t.visible = false;
		t.y = 441.76;
		return t;
	};
	_proto.eimage_name_bg_i = function () {
		var t = new eui.Image();
		this.eimage_name_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84.85;
		t.scale9Grid = new egret.Rectangle(32,34,56,46);
		t.source = "frame5_png";
		t.width = 388.78;
		t.x = 126.52;
		t.y = 460.91;
		return t;
	};
	_proto.eedtext_name_i = function () {
		var t = new eui.EditableText();
		this.eedtext_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 60;
		t.size = 40;
		t.text = "双生火焰";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 354;
		t.x = 142;
		t.y = 472.91;
		return t;
	};
	_proto.ebtn_ok_i = function () {
		var t = new eui.Button();
		this.ebtn_ok = t;
		t.label = "确定";
		t.skinName = "skins.ButtonSkin";
		t.x = 102;
		t.y = 557.4;
		return t;
	};
	_proto.ebtn_close_i = function () {
		var t = new eui.Button();
		this.ebtn_close = t;
		t.label = "取消";
		t.skinName = "skins.ButtonSkin";
		t.x = 326;
		t.y = 557.4;
		return t;
	};
	return NameInput;
})(eui.Skin);generateEUI.paths['resource/ui_pages/Props.exml'] = window.Props = (function (_super) {
	__extends(Props, _super);
	function Props() {
		_super.call(this);
		this.skinParts = ["r_mask","r_bg","img_bg","lb_name","btn_rename","lb_tends"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.r_mask_i(),this.r_bg_i(),this.img_bg_i(),this.lb_name_i(),this.btn_rename_i(),this.lb_tends_i()];
	}
	var _proto = Props.prototype;

	_proto.r_mask_i = function () {
		var t = new eui.Rect();
		this.r_mask = t;
		t.alpha = 0;
		t.height = 1136;
		t.width = 640;
		return t;
	};
	_proto.r_bg_i = function () {
		var t = new eui.Rect();
		this.r_bg = t;
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.height = 634;
		t.width = 488;
		t.x = 76;
		t.y = 251.91;
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.anchorOffsetY = 0;
		t.height = 658.45;
		t.scale9Grid = new egret.Rectangle(34,28,50,60);
		t.source = "frame5_png";
		t.verticalCenter = 0;
		t.width = 510;
		t.x = 65;
		return t;
	};
	_proto.lb_name_i = function () {
		var t = new eui.Label();
		this.lb_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 39;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "双生火焰";
		t.textAlign = "center";
		t.textColor = 0x8BE2FF;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 167;
		t.y = 281.5;
		return t;
	};
	_proto.btn_rename_i = function () {
		var t = new eui.Button();
		this.btn_rename = t;
		t.anchorOffsetX = 0;
		t.label = "改名";
		t.skinName = "skins.ButtonSkin";
		t.width = 128;
		t.x = 413.33;
		t.y = 263.5;
		return t;
	};
	_proto.lb_tends_i = function () {
		var t = new eui.Label();
		this.lb_tends = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 400;
		t.horizontalCenter = 0;
		t.text = "Label";
		t.textColor = 0x8be2ff;
		t.width = 330;
		t.y = 358;
		return t;
	};
	return Props;
})(eui.Skin);generateEUI.paths['resource/ui_pages/Story.exml'] = window.Story = (function (_super) {
	__extends(Story, _super);
	function Story() {
		_super.call(this);
		this.skinParts = ["anim_drop","anim_loop","r_bg","lb_text","r_mask","img_text_bg","btn_ok","btn_yes","btn_no","i_redpoint","g_little_note","btn_skip","lb_tend"];
		
		this.height = 1136;
		this.width = 640;
		this.anim_drop_i();
		this.anim_loop_i();
		this.elementsContent = [this.r_bg_i(),this.g_little_note_i(),this.btn_skip_i(),this.lb_tend_i()];
		
		eui.Binding.$bindProperties(this, ["r_mask"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"scaleY");
		eui.Binding.$bindProperties(this, ["g_little_note"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, ["lb_text"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, ["btn_ok"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object8,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object8,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object9,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object9,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object10,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object10,"scaleY");
		eui.Binding.$bindProperties(this, ["btn_yes"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object11,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object11,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object13,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object13,"scaleY");
		eui.Binding.$bindProperties(this, ["btn_no"],[0],this._TweenItem6,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object14,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object14,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object14,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object15,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object15,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object15,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object16,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object16,"scaleY");
		eui.Binding.$bindProperties(this, ["lb_tend"],[0],this._TweenItem7,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object17,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object18,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object19,"alpha");
		eui.Binding.$bindProperties(this, [0.2],[],this._Object20,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object21,"alpha");
		eui.Binding.$bindProperties(this, ["i_redpoint"],[0],this._TweenItem8,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object22,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object23,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object24,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object25,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object26,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object27,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object28,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object29,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object30,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object31,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object32,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object33,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object34,"alpha");
	}
	var _proto = Story.prototype;

	_proto.anim_drop_i = function () {
		var t = new egret.tween.TweenGroup();
		this.anim_drop = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i(),this._TweenItem5_i(),this._TweenItem6_i(),this._TweenItem7_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._Wait1_i(),this._Set2_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 500;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 3500;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set3_i(),this._To2_i()];
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set4_i(),this._Wait2_i(),this._Set5_i()];
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 500;
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Set6_i(),this._Wait3_i(),this._Set7_i(),this._To3_i()];
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 3500;
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Set8_i(),this._Wait4_i(),this._Set9_i(),this._To4_i()];
		return t;
	};
	_proto._Set8_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 3500;
		return t;
	};
	_proto._Set9_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._TweenItem6_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem6 = t;
		t.paths = [this._Set10_i(),this._Wait5_i(),this._Set11_i(),this._To5_i()];
		return t;
	};
	_proto._Set10_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._Wait5_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 3500;
		return t;
	};
	_proto._Set11_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto._TweenItem7_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem7 = t;
		t.paths = [this._Set12_i(),this._Wait6_i(),this._Set13_i(),this._To6_i(),this._To7_i(),this._To8_i()];
		return t;
	};
	_proto._Set12_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object17_i();
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		this._Object17 = t;
		return t;
	};
	_proto._Wait6_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 2000;
		return t;
	};
	_proto._Set13_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object18_i();
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		this._Object18 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object19_i();
		return t;
	};
	_proto._Object19_i = function () {
		var t = {};
		this._Object19 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object20_i();
		return t;
	};
	_proto._Object20_i = function () {
		var t = {};
		this._Object20 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object21_i();
		return t;
	};
	_proto._Object21_i = function () {
		var t = {};
		this._Object21 = t;
		return t;
	};
	_proto.anim_loop_i = function () {
		var t = new egret.tween.TweenGroup();
		this.anim_loop = t;
		t.items = [this._TweenItem8_i()];
		return t;
	};
	_proto._TweenItem8_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem8 = t;
		t.paths = [this._Set14_i(),this._Wait7_i(),this._Set15_i(),this._Wait8_i(),this._Set16_i(),this._Wait9_i(),this._Set17_i(),this._To9_i(),this._To10_i(),this._To11_i(),this._To12_i(),this._To13_i(),this._Wait10_i(),this._Set18_i(),this._Wait11_i(),this._Set19_i(),this._Wait12_i(),this._Set20_i(),this._Wait13_i(),this._Set21_i()];
		return t;
	};
	_proto._Set14_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object22_i();
		return t;
	};
	_proto._Object22_i = function () {
		var t = {};
		this._Object22 = t;
		return t;
	};
	_proto._Wait7_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 200;
		return t;
	};
	_proto._Set15_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object23_i();
		return t;
	};
	_proto._Object23_i = function () {
		var t = {};
		this._Object23 = t;
		return t;
	};
	_proto._Wait8_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 200;
		return t;
	};
	_proto._Set16_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object24_i();
		return t;
	};
	_proto._Object24_i = function () {
		var t = {};
		this._Object24 = t;
		return t;
	};
	_proto._Wait9_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 200;
		return t;
	};
	_proto._Set17_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object25_i();
		return t;
	};
	_proto._Object25_i = function () {
		var t = {};
		this._Object25 = t;
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object26_i();
		return t;
	};
	_proto._Object26_i = function () {
		var t = {};
		this._Object26 = t;
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object27_i();
		return t;
	};
	_proto._Object27_i = function () {
		var t = {};
		this._Object27 = t;
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object28_i();
		return t;
	};
	_proto._Object28_i = function () {
		var t = {};
		this._Object28 = t;
		return t;
	};
	_proto._To12_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object29_i();
		return t;
	};
	_proto._Object29_i = function () {
		var t = {};
		this._Object29 = t;
		return t;
	};
	_proto._To13_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object30_i();
		return t;
	};
	_proto._Object30_i = function () {
		var t = {};
		this._Object30 = t;
		return t;
	};
	_proto._Wait10_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 300;
		return t;
	};
	_proto._Set18_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object31_i();
		return t;
	};
	_proto._Object31_i = function () {
		var t = {};
		this._Object31 = t;
		return t;
	};
	_proto._Wait11_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set19_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object32_i();
		return t;
	};
	_proto._Object32_i = function () {
		var t = {};
		this._Object32 = t;
		return t;
	};
	_proto._Wait12_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 50;
		return t;
	};
	_proto._Set20_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object33_i();
		return t;
	};
	_proto._Object33_i = function () {
		var t = {};
		this._Object33 = t;
		return t;
	};
	_proto._Wait13_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set21_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object34_i();
		return t;
	};
	_proto._Object34_i = function () {
		var t = {};
		this._Object34 = t;
		return t;
	};
	_proto.r_bg_i = function () {
		var t = new eui.Rect();
		this.r_bg = t;
		t.fillColor = 0x000000;
		t.height = 1136;
		t.width = 640;
		return t;
	};
	_proto.g_little_note_i = function () {
		var t = new eui.Group();
		this.g_little_note = t;
		t.height = 1136;
		t.width = 640;
		t.elementsContent = [this.lb_text_i(),this.r_mask_i(),this.img_text_bg_i(),this.btn_ok_i(),this.btn_yes_i(),this.btn_no_i(),this.i_redpoint_i()];
		return t;
	};
	_proto.lb_text_i = function () {
		var t = new eui.Label();
		this.lb_text = t;
		t.fontFamily = "SimHei";
		t.height = 550;
		t.horizontalCenter = 14;
		t.lineSpacing = 20;
		t.size = 36;
		t.text = "一二三四五六七八九十\n二\n三\n四\n五\n六\n七\n八";
		t.textAlign = "left";
		t.textColor = 0x8be2ff;
		t.verticalAlign = "middle";
		t.width = 500;
		t.y = 180;
		return t;
	};
	_proto.r_mask_i = function () {
		var t = new eui.Rect();
		this.r_mask = t;
		t.anchorOffsetY = 580;
		t.fillColor = 0x000000;
		t.height = 580;
		t.width = 640;
		t.x = 0;
		t.y = 750;
		return t;
	};
	_proto.img_text_bg_i = function () {
		var t = new eui.Image();
		this.img_text_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 584;
		t.scale9Grid = new egret.Rectangle(30,29,60,59);
		t.source = "frame5_png";
		t.width = 603;
		t.x = 19;
		t.y = 170;
		return t;
	};
	_proto.btn_ok_i = function () {
		var t = new eui.Button();
		this.btn_ok = t;
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 25;
		t.horizontalCenter = 0;
		t.label = "确定";
		t.width = 400;
		t.y = 825;
		return t;
	};
	_proto.btn_yes_i = function () {
		var t = new eui.Button();
		this.btn_yes = t;
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 25;
		t.horizontalCenter = 0;
		t.label = "是";
		t.width = 400;
		t.y = 825;
		return t;
	};
	_proto.btn_no_i = function () {
		var t = new eui.Button();
		this.btn_no = t;
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 25;
		t.horizontalCenter = 0;
		t.label = "否";
		t.width = 400;
		t.y = 925;
		return t;
	};
	_proto.i_redpoint_i = function () {
		var t = new eui.Image();
		this.i_redpoint = t;
		t.height = 50;
		t.source = "scroller_bar_png";
		t.width = 50;
		t.x = 39;
		t.y = 135;
		return t;
	};
	_proto.btn_skip_i = function () {
		var t = new eui.Button();
		this.btn_skip = t;
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 25;
		t.horizontalCenter = 0;
		t.label = "跳过并放弃奖励(消耗10时间晶体)";
		t.visible = false;
		t.width = 400;
		t.y = 68;
		return t;
	};
	_proto.lb_tend_i = function () {
		var t = new eui.Label();
		this.lb_tend = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 38;
		t.size = 24;
		t.text = "双生火焰特性：肉体";
		t.textAlign = "center";
		t.textColor = 0x8be2ff;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 640;
		t.x = 0;
		t.y = 752;
		return t;
	};
	return Story;
})(eui.Skin);generateEUI.paths['resource/ui_pages/System.exml'] = window.System = (function (_super) {
	__extends(System, _super);
	function System() {
		_super.call(this);
		this.skinParts = ["r_mask","r_bg","img_bg","lb_slogan","btn_history","btn_credits","btn_link","lb_error_tip"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.r_mask_i(),this.r_bg_i(),this.img_bg_i(),this.lb_slogan_i(),this.btn_history_i(),this.btn_credits_i(),this.btn_link_i(),this.lb_error_tip_i()];
	}
	var _proto = System.prototype;

	_proto.r_mask_i = function () {
		var t = new eui.Rect();
		this.r_mask = t;
		t.alpha = 0;
		t.height = 1136;
		t.width = 640;
		return t;
	};
	_proto.r_bg_i = function () {
		var t = new eui.Rect();
		this.r_bg = t;
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.height = 634;
		t.width = 488;
		t.x = 76;
		t.y = 251.91;
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.anchorOffsetY = 0;
		t.height = 658.45;
		t.scale9Grid = new egret.Rectangle(34,28,50,60);
		t.source = "frame5_png";
		t.verticalCenter = 0;
		t.width = 510;
		t.x = 65;
		return t;
	};
	_proto.lb_slogan_i = function () {
		var t = new eui.Label();
		this.lb_slogan = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 147.33;
		t.horizontalCenter = -0.5;
		t.lineSpacing = 20;
		t.size = 48;
		t.text = "双生火焰\n游人坊 出品";
		t.textAlign = "center";
		t.textColor = 0x8be2ff;
		t.width = 415.33;
		t.y = 317.49;
		return t;
	};
	_proto.btn_history_i = function () {
		var t = new eui.Button();
		this.btn_history = t;
		t.horizontalCenter = 0.5;
		t.label = "历史记录";
		t.y = 500;
		return t;
	};
	_proto.btn_credits_i = function () {
		var t = new eui.Button();
		this.btn_credits = t;
		t.horizontalCenter = 0.5;
		t.label = "制作人员";
		t.y = 620;
		return t;
	};
	_proto.btn_link_i = function () {
		var t = new eui.Button();
		this.btn_link = t;
		t.label = "更多游戏";
		t.x = 212;
		t.y = 740;
		return t;
	};
	_proto.lb_error_tip_i = function () {
		var t = new eui.Label();
		this.lb_error_tip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 28;
		t.size = 24;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xff0000;
		t.verticalAlign = "middle";
		t.width = 442;
		t.x = 97;
		t.y = 455.82;
		return t;
	};
	return System;
})(eui.Skin);