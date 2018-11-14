var ICON_SIZE = 150;
var PADDING = 20;
var model = {
  cursor: {
    x: 0,
    y: 0
  },
  columns: {
	 "QUICK": {
      index: 0,
      title: "دسترسی  سریع",
      selectedIndex: 0,
      active: false,
      icon: 'style',
      items: [{ title: "HEN 1.8", desc: "« پی لود HEN (اختصار برای Homebrew ENabler) که امکان نصب و اجرای بازیهای بصورت fPKG را فراهم میکند »", version: "1.8 by zecoxao", active: false, icon: "apps", expage: "payloads/hen108.html" }, { title: "HEN 1.7 Lite", desc: "« نسخه سبک تر پی لود HEN که قابلیت آپدیت بلاکر در آن حذف شده است »", version: "1.7 by c0d3m4st4", active: false, icon: "loupe", expage: "payloads/henlite.html"}, { title: "FTP", desc: "« پی لود FTP که بستر ارتباطی لازم جهت اتصال کنسول و کامپیوتر را از طریق پروتکل FTP فراهم می سازد »", version: "1.3 by xVortex", active: false, icon: "wifi", expage: "payloads/vtxftp.html"} ]
    },
    "HEN": {
      index: 1,
      title: "پکیج HEN",
      selectedIndex: 0,
      active: false,
      icon: 'gamepad',
      items: [{ title: "HEN 1.8", desc: "« پی لود HEN (اختصار برای Homebrew ENabler) که امکان نصب و اجرای بازیهای بصورت fPKG را فراهم میکند »", version: "1.8 by zecoxao", active: false, icon: "apps", expage: "payloads/hen108.html" }, {title: "HEN 1.7", desc: "« پی لود HEN (اختصار برای Homebrew ENabler) که امکان نصب و اجرای بازیهای بصورت fPKG را فراهم میکند »", version: "1.7 by xVortex", active: false, icon: "lock", expage: "payloads/vtxhen.html" }, {title: "HEN 1.6", desc: "« پی لود HEN (اختصار برای Homebrew ENabler) که امکان نصب و اجرای بازیهای بصورت fPKG را فراهم میکند »", version: "1.6 by xVortex", active: false, icon: "shop", expage: "payloads/hen106.html" }, { title: "HEN+VR", desc: "« فعالسازی HEN 1.7 به همراه پی لود VR بطور همزمان »", version: "1.7 mod by Stooged", active: false, icon: "polymer", expage: "payloads/vtxhenvrmod.html" }, {title: "HEN+SCREENSHOT", desc: "« فعالسازی HEN 1.7 به همراه پی لود Screenshot که اجازه گرفتن اسکرین شات در بخشهای محدود شده را فراهم میکند »", version: "1.7 mod by BIORN", active: false, icon: "tab", expage: "payloads/screenshot.html" }, {title: "HEN 1.7 Lite", desc: "« نسخه سبک تر پی لود HEN که قابلیت آپدیت بلاکر در آن حذف شده است »", version: "1.7 mod by C0d3m4st4", active: false, icon: "loupe", expage: "payloads/henlite.html" }, { title: "HEN+AUTH", desc: "« فعالسازی HEN 1.7 به همراه پچ های AUTH »", version: "1.7 mod by Björn", active: false, icon: "texture", expage: "payloads/henauth.html" }, { title: "MIRAHEN", desc: "« فعالسازی MIRA+HEN 1.7 به همراه ابزار ثبت لاگ کرنل از طریق پورت 9999/9998 »", version: "1.7 by OpenOrbisTeam", active: false, icon: "apps", expage: "payloads/mirahen.html" }, { title: "MIRA", desc: "« فعالسازی MIRA و ابزار ثبت لاگ کرنل از طریق پورت 9999/9998 »", version: "1.7 by OpenOrbisTeam", active: false, icon: "nfc", expage: "payloads/mira.html" }, { title: "BINLOADER", desc: "« فعالسازی BINLOADER از طریق پورت 9020 »", version: "1.7 by OpenOrbisTeam", active: false, icon: "send", expage: "payloads/binloader.html" }, { title: "MIRAHEN+BINLOADER", desc: "« فعالسازی MIRA+HEN و همچنین BINLOADER بطور همزمان »", version: "1.7 by OpenOrbisTeam", active: false, icon: "input", expage: "payloads/mirabin.html" }]
    },
    "BLOCK": {
      index: 2,
      title: "آپدیت بلاکر",
      selectedIndex: 0,
      active: false,
      icon: "security",
      items: [{ title: "BLOCKER+FTP", desc:"« فعال کردن آپدیت بلاکر و سرویس FTP بطور همزمان »", version: "1.3 by Lightningmods & CelesteBlue", active: false, icon: "block", expage: "payloads/blockftp.html"  }, { title: "DISABLE UPDATES", desc:"« پی لود Disable Updates که مانع از آپدیت شدن کنسول در مواقعی که به اینترنت متصل است می گردد »", version: "1.0 by Al-Azif", active: false, icon: "clear", expage: "payloads/disupdates.html"  }, { title: "ENABLE UPDATES", desc:"« پی لود Enable Updates که با غیر فعال کردن Disable Updates امکان دریافت و نصب آپدیت را میسر می سازد »", version: "1.0 by Al-Azif", active: false, icon: "undo", expage: "payloads/enupdates.html" }, { title: "UPDATE BLOCKER EXTREME", desc:"« بلاک کردن تمامی مسیرهای آپدیت کنسول »", version: "1.0 by Lightningmods", active: false, icon: "language", expage: "payloads/blockEX.html" }, { title: "UPDATE UNBLOCKER EXTREME", desc:"« غیر فعال کننده پی لود Update Blocker Extreme »", version: "1.0 by Lightningmods", active: false, icon: "sync_disabled", expage: "payloads/unblockEX.html" }]
    },
    "LINUX": {
      index: 3,
      title: "لینوکس",
      selectedIndex: 0,
      active: false,
      icon: "laptop",
      items: [{ title: "LINUX", desc:"« نسخه سبکی از لودر لینوکس که سیستم عامل مذکور را از حافظه USB بارگذاری میکند »", version: "1.0 by EEPLY", active: false, icon: "camera", expage: "payloads/eeplinux.html"}, { title: "LINUX", desc:"« لودر کرنل لینوکس که سیستم عامل مذکور را از حافظه USB بارگذاری میکند »", version: "1.0 by Vultra", active: false, icon: "keyboard", expage: "payloads/linux.html"}, { title: "KEXEC", desc:"« لودر کرنل لینوکس بطور مستقیم از Orbis OS »", version: "1.0 by ValentineBreize", active: false, icon: "widgets", expage: "payloads/kexec.html"}]
    },
    "BACKUP": {
      index: 4,
      title: "بک آپ",
      selectedIndex: 0,
      active: false,
      icon: "backup",
      items: [{ title: "DUMPER", desc: "« پی لود Dumper که امکان تهیه دامپ یا بکاپ از دیسک بازی و یا عناوین دیجیتالی PS4 را فراهم میکند »", version: "1.8 by xVortex", active: false, icon: "archive", expage: "payloads/vtxdump.html"}, { title: "DB SG BACKUP", desc:"« تهیه بکاپ از سیو بازیها و بخش های مهم دیتابیس به حافظه USB »", version:"3.0 by Stooged", active: false, icon: "save", expage: "payloads/dbsg.html" }, { title: "DB RESTORE", desc:"« بازگردانی بکاپ تهیه شده از حافظه USB به کنسول »", version: "2.0 by Stooged", active: false, icon: "publish", expage: "payloads/dbrestore1.html" }, { title: "DB RESTORE UNDO", desc:"« حذف بکاپ به اشتباه بازگردانی شده »", version: "2.0 by Stooged modded by Leeful", active: false, icon: "delete", expage: "payloads/dbrestoreUNDO1.html" }, { title: "APPTOUSB", desc:"« انتقال بازی نصب شده از کنسول به حافظه خارجی با فرمت ExFat »", version: "3.0 by Stooged", active: false, icon: "storage", expage: "payloads/apptousb.html"}, { title: "APPTOUSB ALT", desc:"« همانند پی لود AppToUSB اما بطور انحصاری برای پورت USB1 »", version: "1.0 mod by Jakkal", active: false, icon: "dns", expage: "payloads/apptousb1alt.html"}, { title: "USB FAKE PACKAGES", desc:"« پی لود دیگری بر اساس pkg2usb از SiSTRo و AppToUSB از Stooged »", version: "1.1b by Specialfood", active: false, icon: "usb", expage: "payloads/usbfpkgs.html" }]
    },
    "SYSTEM": {
	  index: 5,
      title: "سیستم",
      selectedIndex: 0,
      active: false,
      icon: "home",
	  items: [{ title: "PS4 Remote Play", desc:"« فعالسازی حالت Remote Play بدون نیاز به اکانت PSN در کنسول »", version: "1.0 by SiSTRo", active: false, icon: "timelapse", expage: "payloads/ren.html"} , {title: "EVERSION", desc:"« دامپ کننده کرنل جاری به حافظه USB – سازگار با فریمور 4.05 تا 5.05 »", version: "1.3 by CelesteBlue", active: false, icon: "memory", expage: "payloads/everkdump.html" }, { title: "KERNEL DUMPER", desc:"« دامپ کننده کرنل جاری به حافظه USB »", version: "2.0 by Stooged", active: false, icon: "work", expage: "payloads/kdumper.html" }, { title: "FS DUMPER", desc:"« دامپ کننده فایلهای کنسول به حافظه USB »", version: "1.0 by Stooged", active: false, icon: "pageview", expage: "payloads/fsdumper.html" }]
	},
  "TOOLS": {
      index: 6,
      title: "ابزارها",
      selectedIndex: 0,
      active: false,
      icon: "settings",
      items: [{ title: "VR ENABLER", desc:"« فعال کردن هدست VR در صورت نیاز که باید بعد از پی لود HEN انتخاب شود »", version: "1.0 by Stooged", active: false, icon: "visibility", expage: "payloads/vr.html" }, { title: "FTP", desc: "« پی لود FTP که بستر ارتباطی لازم جهت اتصال کنسول و کامپیوتر را از طریق پروتکل FTP فراهم می سازد »", version: "1.3 by xVortex", active: false, icon: "wifi", expage: "payloads/vtxftp.html"}, { title: "FTP+R/W", desc:"« راه اندازی پروتکل FTP و همچنین دسترسی Read/Write به تمامی 16 پارتیشن موجود در هارد کنسول »", version: "1.0 by Lightningmods", active: false, icon: "warning", expage: "payloads/ftprw.html" }, { title: "REACTPSPLUS", desc:"« پی لود ReactPSPlus که امکان فعالسازی مجدد عناوینی که از PSN  خریداری شده و غیرفعال شده اند را فراهم میکند »", version: "2012 edition by Zer0xFF", active: false, icon: "restore", expage: "payloads/react.html" }, { title: "UNREACTPSPLUS", desc:"« غیرفعال کردن پی لود REACTPSPLUS »", version: "2018 edition by Zer0xFF", active: false, icon: "update", expage: "payloads/unreact.html" }]
    },
	"CHEATS": {
      index: 7,
      title: "چیت و تقلب",
      selectedIndex: 0,
      active: false,
      icon: "search",
      items: [{ title: "IH RTM EDITOR", desc:"« ابزار چیت براساس قابلیت های RTM »", version: "1.0.0.0 by Intention Hackers", active: false, icon: "dvr", expage: "payloads/ihrtm.html" },{ title: "COMMUNITY TRAINER", desc:"« ابزار چیت Community driven »", version: "1.0.2.0 by DeathRGH", active: false, icon: "comment", expage: "payloads/community.html" }, { title: "PS4 TRAINER", desc:"« ابزار ترینر جهت استفاده از چیت »", version: "1.4.91.113 by Tylermods", active: false, icon: "code", expage: "payloads/tylermods.html" }, { title: "JKPATCH", desc:"« سرور RPC برای پیدا کردن چیت »", version: "1.0 by XEMIO", active: false, icon: "timeline", expage: "payloads/jkpatch.html" }, { title: "DeathRGH", desc:"« ابزار چیت DeathRGH »", version: "1.6.0.0 by DeathRGH", active: false, icon: "attachment", expage: "payloads/deathrgh.html" }, { title: "PS4 CHEATER", desc:"« ابزاری برای پیدا کردن چیت »", version: "1.4.7 by Chendochap", active: false, icon: "create", expage: "payloads/cheater.html" }, { title: "PS4API SERVER 1.0", desc:"« امکان کنترل حافظه بخش بازی در حال اجرا برای ابزارهای RTM/RTE »", version: "1.0 by Helloitu", active: false, icon: "flag", expage: "payloads/ps4api.html" }, { title: "PS4API SERVER 1.1", desc:"« امکان کنترل حافظه بخش بازی در حال اجرا برای ابزارهای RTM/RTE »", version: "1.1 by Bisoon", active: false, icon: "transform", expage: "payloads/ps4apibisoon.html" }]
    },
  "MENUS": {
      index: 8,
      title: "منوها",
      selectedIndex: 0,
      active: false,
      icon: "tune",
      items: [{ title: "NOTYOURDOPES 127 ~ [R1 + Down]", desc:"« ماد منو برای بازی GTA V نسخه 1.27 »", version: "1.0 by NotYourDope", active: false, icon: "group", expage: "payloads/GTA/GTA_NotYourDopes127.html" }, { title: "NOTANOTHERMENU ~ [RIGHT + مربع]", desc:"« ماد منو برای بازی GTA V نسخه 1.0 »", version: "0.1 by David1337hax", active: false, icon: "redeem", expage: "payloads/GTA/GTA_NotAnother.html" }, { title: "NOTANOTHERMENU 127  ~ [RIGHT + مربع]", desc:"« ماد منو برای بازی GTA V نسخه 1.27 »", version: "0.2 by David1337hax", active: false, icon: "redeem", expage: "payloads/GTA/GTA_NotAnother127.html" }, { title: "AP II INTENSE V2 1.27 ~ [R1 + مربع]", desc:"« ماد منو برای بازی GTA V نسخه 1.27 »", version: "1.5 by EROOTIIK", active: false, icon: "extension", expage: "payloads/GTA/GTA_Intense127.html" }, { title: "LAMANCE ~ [RIGHT + مربع]", desc:"« ماد منو برای بازی GTA V نسخه 1.0 »", version: "0.8 by David1337hax", active: false, icon: "stars", expage: "payloads/GTA/GTA_Lamance.html" }, { title: "LAMANCE 1.27 ~ [RIGHT + مربع]", desc:"« ماد منو برای بازی GTA V نسخه 1.27 »", version: "0.8 by David1337hax", active: false, icon: "stars", expage: "payloads/GTA/GTA_Lamance127.html" }]
    },
	"CACHE": {
      index: 9,
      title: "مرورگر",
      selectedIndex: 0,
      active: false,
      icon: "copyright",
      items: [{ title: "HISTORY BLOCKER", desc:"« پی لود History Blocker که قابلیت ذخیره آخرین صفحه مرور شده توسط مرورگر را غیرفعال میکند »", version: "2.0 by Stooged", active: false, icon: "bookmarks", expage: "payloads/history.html" }]
	},
	"ABOUT": {
      index: 10,
      title: "درباره سازندگان",
      selectedIndex: 0,
      active: false,
      icon: "help",
      items: [{title: "◄ PS4 Self-Exploit Host (OFW 5.05 Only) ►", desc:"(November 2018  (Auto Cache", version: "v1.4.2 by SCORPION, Template by DEFAULTDNB", active: false, icon: "fingerprint"}]
    },
	"★DEBUG": {
      index: 11,
      title: " ",
      selectedIndex: 0,
      active: false,
      icon: " ",
      items: [{ title: " ", desc: " ", version:" ", active: false, icon: " ", expage: " " }]
	},
  }
  //add zero position to each column and item
};_.each(model.columns, function (c) {
  c.position = { x: 0, y: 0 };
  _.each(c.items, function (i) {
    i.position = {
      x: 0,
      y: 0
    };
  });
});

var xmbVue = new Vue({
  el: "#xmb",
  data: model,
  methods: {
    handleKey: function handleKey(dir, val) {
      this.cursor[dir] += val;
      var nCols = this.nColumns;

      // wrap x
      this.cursor.x = this.cursor.x % nCols;
      if (this.cursor.x < 0) {
        this.cursor.x = this.cursor.x + nCols;
      }

      //wrap y
      var nRows = this.nRows;
      this.cursor.y = this.cursor.y % nRows;
      if (this.cursor.y < 0) {
        this.cursor.y = this.cursor.y + nRows;
      }

      this.highlightCell(this.cursor.x, this.cursor.y);
    },
    highlightCell: function highlightCell(column, row) {

      console.log(column, row);
      //update position of elements as well
      var xAccum = (-column - 1) * (ICON_SIZE);
      if (column == 0) {
        xAccum += ICON_SIZE;
      }
      var yAccum;

      _.each(this.columns, function (col, colKey) {
        col.active = false;
        yAccum =  - (ICON_SIZE) * (row + 1);

        col.position.x = xAccum;
        xAccum += ICON_SIZE;
        if (column === col.index || column === col.index + 1) {
          xAccum += ICON_SIZE;
        }

        _.each(col.items, function (item, rowN) {
          if (rowN == row && col.index == column) {
            item.active = true;
            col.active = true;
          } else {
            item.active = false;
          }

          if (rowN == row) {
            yAccum += ICON_SIZE;
          }
          yAccum += ICON_SIZE;
          item.position.y = yAccum;
        });
      });
      this.cursor.y = row;
      this.cursor.x = column;
    }
  },
  watch: {
    cursor: function cursor(e) {
      console.log('cursor mutated', e);
    }
  },
  computed: {
    nColumns: function nColumns() {
      return Object.keys(this.columns).length;
    },
    nRows: function nRows() {
      //get the row at the current index
      var row = this.columnsArray[this.cursor.x];
      if (!row) {
        console.log('invalid row index: ', this.cursor.x);
        return 0;
      }
      return row.items.length; //todo: number of columns in this row
    },
    columnsArray: function columnsArray() {
      var _this = this;

      //get columns in an array
      var arr = [];
      Object.keys(this.columns).forEach(function (key) {
        arr.push(_this.columns[key]);
      });
      return _.sortBy(arr, 'index');
    }
  },
  created: function created() {
    _.each(this.columns, function (column) {
      _.each(column.items, function (item) {
        item.active = false;
      });
    });
    this.highlightCell(this.cursor.x, this.cursor.y);
  }
});

$('body').on("mousewheel", _.debounce(scrollHandler, 50));

function scrollHandler(e) {
  console.log(e);
  if (e.deltaX) {
    xmbVue.handleKey('x', Math.sign(e.deltaX));
  }
  if (e.deltaY) {
    xmbVue.handleKey('y', Math.sign(e.deltaY));
  }
}
// REMAP TO D-PAD EXPERIMENTAL
// 114 = options, 116 = L1, 117 = R1
window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;
   if (key == 37) {
   xmbVue.handleKey('x', -1);
   } else if (key == 39) {
   xmbVue.handleKey('x', 1);
   } else if (key  == 38) {
   xmbVue.handleKey('y', -1);
   } else if (key  == 40) {
   xmbVue.handleKey('y', 1);
   } else if (key == 116) {
   window.open("payloads/vtxhen.html", "content");
   } else if (key == 117) {
   window.open("payloads/xmbcache.html", "content");
   }
};
