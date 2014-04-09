enyo.kind({
	name: "A2048",
	kind: enyo.VFlexBox,
	components: [
		{kind: "AppMenu", components: [ // In chromium: CTRL + `
			{kind: "EditMenu"},
			{caption: "New game", onclick: "gameRestart"},
			{caption: "About", onclick: "showAbout"},
			{caption: "Help", onclick: "showHelp"}
		]},
		{
		   kind: "ModalDialog",
		   name: "myMessage",
		   caption: "Message",
		   layoutKind: "VFlexLayout",
		   lazy: false,
		   components: [
				{name: "messageScroller", kind: "BasicScroller", autoVertical: true, style: "height: auto;", flex: 1,
					components: [
						{
							name: "myText",
							content: "Chyba toho a toho.",
							allowHtml: true,
							className: "",
						},
					]
			   },
				{
					name: "Button1",
					kind: "Button",
					caption: "OK",
					onclick: "closePopup",
				},
		   ],
		},
	],
	gameRestart: function(){
		game.restart();
	},
	closePopup: function(){
		this.$.myMessage.close();
	},
	showAbout: function(){
		this.$.messageScroller.setScrollTop(0);
		this.$.myMessage.setCaption("About");
		this.$.myText.setContent('<p>\
    <strong class="important">Note:</strong> This site is the official version of 2048. You can play it on your phone via <a href="http://git.io/2048">http://git.io/2048.</a> All other apps or sites are derivatives or fakes, and should be used with caution.\
    </p>\
    <hr>\
    <p>\
    Created by <a href="http://gabrielecirulli.com" target="_blank">Gabriele Cirulli.</a> Based on <a href="https://itunes.apple.com/us/app/1024!/id823499224" target="_blank">1024 by Veewo Studio</a> and conceptually similar to <a href="http://asherv.com/threes/" target="_blank">Threes by Asher Vollmer.</a>\
    </p>\
    <hr>\
    <p>\
    Modified by <a href="http://jakuje.dta3.com">Jakuje</a> to run as Enyo application on webOS.\
    </p>\
    ');
		this.$.myMessage.openAtCenter();
	},
	showHelp: function(){
		this.$.messageScroller.setScrollTop(0);
		this.$.myMessage.setCaption("Help");
		this.$.myText.setContent('<p class="game-explanation">\
      <strong class="important">How to play:</strong> Use your <strong>arrow keys</strong> to move the tiles. When two tiles with the same number touch, they <strong>merge into one!</strong>\
    </p>');
		this.$.myMessage.openAtCenter();
	},
	create: function(){
		this.inherited(arguments);
	},
});
