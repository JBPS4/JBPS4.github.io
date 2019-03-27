var ICONSZ = 150;
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
      items: [{ title: "HEN 1.6", desc: "« پی لود HEN (اختصار برای Homebrew ENabler) که امکان نصب و اجرای بازیهای بصورت fPKG را فراهم میکند »", version: "1.6 by xVortex", active: false, icon: "", expage: "payloads/vtxhen16.html" }, { title: "HEN 1.5", desc: "« پی لود HEN (اختصار برای Homebrew ENabler) که امکان نصب و اجرای بازیهای بصورت fPKG را فراهم میکند »", version: "1.5 by xVortex", active: false, icon: "lock", expage: "payloads/Hen15.html" }, {title: "HEN (LITE)", desc: "« نسخه سبک تر پی لود HEN که قابلیت آپدیت بلاکر در آن حذف شده است »", version: "1.7 mod by C0d3m4st4", active: false, icon: "loupe", expage: "payloads/vtxhenc0d3mod.html" } ,{ title: "BINLOADER", desc: "« فعالسازی BINLOADER از طریق پورت 9020 »", version: "1.7 by OpenOrbisTeam", active: false, icon: "send", expage: "payloads/binloader.html" }, { title: "DUMPER", desc: "« پی لود Dumper که امکان تهیه دامپ یا بکاپ از دیسک بازی و یا عناوین دیجیتالی PS4 را فراهم میکند »", version: "1.8 by xVortex", active: false, icon: "archive", expage: "payloads/vtxdump.html"}, { title: "FTP SERVER", desc: "« پی لود FTP که بستر ارتباطی لازم جهت اتصال کنسول و کامپیوتر را از طریق پروتکل FTP فراهم می سازد »", version: "1.3 by xVortex", active: false, icon: "wifi", expage: "payloads/vtxftp.html"}]
    },
    "HEN": {
      index: 1,
      title: "پکیج HEN",
      selectedIndex: 0,
      active: false,
      icon: 'gamepad',
      items: [{ title: "HEN 1.9", desc: "« پی لود HEN (اختصار برای Homebrew ENabler) که امکان نصب و اجرای بازیهای بصورت fPKG را فراهم میکند »", version: "1.9 by Lightningmods", active: false, icon: "", expage: "payloads/vtxhen19.html" }, { title: "HEN 1.8", desc: "« پی لود HEN (اختصار برای Homebrew ENabler) که امکان نصب و اجرای بازیهای بصورت fPKG را فراهم میکند »", version: "1.8 by Zecoxao", active: false, icon: "lock", expage: "payloads/vtxhen18.html" }, { title: "HEN 1.7", desc: "« پی لود HEN (اختصار برای Homebrew ENabler) که امکان نصب و اجرای بازیهای بصورت fPKG را فراهم میکند »", version: "1.7 by xVortex", active: false, icon: "", expage: "payloads/vtxhen17.html" }, { title: "HEN 1.6", desc: "« پی لود HEN (اختصار برای Homebrew ENabler) که امکان نصب و اجرای بازیهای بصورت fPKG را فراهم میکند »", version: "1.6 by xVortex", active: false, icon: "lock", expage: "payloads/vtxhen16.html" }, { title: "HEN 1.5", desc: "« پی لود HEN (اختصار برای Homebrew ENabler) که امکان نصب و اجرای بازیهای بصورت fPKG را فراهم میکند »", version: "1.5 by xVortex", active: false, icon: "", expage: "payloads/Hen15.html" }, { title: "Pure HEN", desc: "« ترکیب سبکی از HEN 1.8 و HEN VR »", version: "1.8 by DEFAULTDNB & LEEFUL", active: false, icon: "lock", expage: "payloads/henpure.html" }, {title: "HEN 1.9 + VR", desc: "« ترکیبی از پی لود HEN 1.9 و VR به همراه Spoof به فریمور 9.00 که فقط استفاده از VR را فراهم میکند»", version: "1.9 mod by Stooged", active: false, icon: "polymer", expage: "payloads/HenVR19.html" }, {title: "HEN 1.8 + VR", desc: "« ترکیبی از پی لود HEN 1.8 و VR به همراه Spoof به فریمور 9.00 که فقط استفاده از VR را فراهم میکند»", version: "1.8 mod by Stooged", active: false, icon: "polymer", expage: "payloads/hen18vrmod.html" }, { title: "HEN 1.7 + VR", desc: "« ترکیبی از پی لود1.7  HEN و VR که بطور همزمان استفاده از VR را فراهم میکند»", version: "1.7 mod by Stooged", active: false, icon: "polymer", expage: "payloads/vtxhenvrmod.html" }, {title: "HEN + SCREENSHOT", desc: "« فعالسازی HEN 1.7 به همراه پی لود Screenshot که اجازه گرفتن اسکرین شات در بخشهای محدود شده را فراهم میکند »", version: "1.7 mod by BIORN", active: false, icon: "tab", expage: "payloads/screenshot.html" }, {title: "HEN (LITE)", desc: "« نسخه سبک تر پی لود HEN که قابلیت آپدیت بلاکر در آن حذف شده است »", version: "1.7 mod by C0d3m4st4", active: false, icon: "loupe", expage: "payloads/vtxhenc0d3mod.html" }, { title: "HEN + AUTH", desc: "« فعالسازی HEN 1.7 به همراه پچ های AUTH »", version: "1.7 mod by Björn", active: false, icon: "texture", expage: "payloads/henauth.html" }, { title: "HEN 1.8 + VR + MIRA", desc: "« ترکیبی از پی لود HEN 1.8 و VR به همراه Mira »", version: "1.8 by DEFAULTDNB", active: false, icon: "", expage: "payloads/mirahen18vr.html" }, { title: "HEN 1.8 + MIRA", desc: "« فعالسازی MIRA+HEN 1.8 به همراه ابزار ثبت لاگ کرنل از طریق پورت 9999/9998 »", version: "1.8 by OpenOrbisTeam", active: false, icon: "apps", expage: "payloads/mirahen18.html" }, { title: "HEN 1.7 + MIRA", desc: "« فعالسازی MIRA+HEN 1.7 به همراه ابزار ثبت لاگ کرنل از طریق پورت 9999/9998 »", version: "1.7 by OpenOrbisTeam", active: false, icon: "apps", expage: "payloads/mirahen.html" }, { title: "HEN 1.7 + BINLOADER + MIRA", desc: "« ترکیبی از پی لود HEN 1.7 و MIRA به همراه پی لود BINLOADER »", version: "1.7 by OpenOrbisTeam", active: false, icon: "input", expage: "payloads/mirabin.html" }]
    },
    "BLOCK": {
      index: 2,
      title: "آپدیت بلاکر",
      selectedIndex: 0,
      active: false,
      icon: "",
      items: [{ title: "BLOCKER + FTP", desc:"« فعال کردن آپدیت بلاکر و سرویس FTP بطور همزمان »", version: "1.3 by Lightningmods & CelesteBlue", active: false, icon: "block", expage: "payloads/blockftp.html"  }, { title: "UPDATE DISABLER", desc:"« پی لود Disable Updates که مانع از آپدیت شدن کنسول در مواقعی که به اینترنت متصل است می گردد »", version: "1.0 by Al-Azif", active: false, icon: "clear", expage: "payloads/blocker.html"  }, { title: "UPDATE ENABLER", desc:"« پی لود Enable Updates که با غیر فعال کردن Disable Updates امکان دریافت و نصب آپدیت را میسر می سازد »", version: "1.0 by Al-Azif", active: false, icon: "undo", expage: "payloads/unblock.html" }, { title: "UPDATE BLOCKER EXTREME", desc:"« بلاک کردن تمامی مسیرهای آپدیت کنسول »", version: "1.0 by Lightningmods", active: false, icon: "language", expage: "payloads/blockEX.html" }, { title: "UPDATE UNBLOCKER EXTREME", desc:"« غیر فعال کننده پی لود Update Blocker Extreme »", version: "1.0 by Lightningmods", active: false, icon: "sync_disabled", expage: "payloads/unblockEX.html" }]
    },
    "LINUX": {
      index: 3,
      title: "لینوکس",
      selectedIndex: 0,
      active: false,
      icon: "laptop",
      items: [{ title: "VRAM1 PSXITARCH LINUX V2", desc:"« لودر مخصوص لینوکس نسخه Psxitarch V2 با مقدار VRam 1 »", version: "VRAM1 by PSXITA", active: false, icon: "", expage: "payloads/1gblinux.html"}, { title: "VRAM2 PSXITARCH LINUX V2", desc:"« لودر مخصوص لینوکس نسخه Psxitarch V2 با مقدار VRam 2 »", version: "VRAM2 by PSXITA", active: false, icon: "", expage: "payloads/2gblinux.html"},{ title: "VRAM3 PSXITARCH LINUX V2 (DON'T USE TO INSTALL)", desc:"« لودر مخصوص لینوکس نسخه Psxitarch V2 با مقدار VRam 3 »", version: "VRAM3 by PSXITA", active: false, icon: "", expage: "payloads/3gblinux.html"},{ title: "PSXITA NOEDID LINUX V2 (VRAM2)", desc:"« لودر مخصوص لینوکس نسخه Psxitarch V2 که با تنظیم رزولوشن بصورت 1080p سعی در بوت کردن لینوکس در کنسولهای ناسازگار را دارد »", version: "NOEDID by PSXITA", active: false, icon: "web", expage: "payloads/linuxnoedid.html"}, { title: "LINUX", desc:"« نسخه سبکی از لودر لینوکس که سیستم عامل مذکور را از حافظه USB بارگذاری میکند »", version: "1.0 by EEPLY", active: false, icon: "camera", expage: "payloads/eeplinux.html"}, { title: "LINUX", desc:"« لودر کرنل لینوکس که سیستم عامل مذکور را از حافظه USB بارگذاری میکند »", version: "1.0 by Vultra", active: false, icon: "keyboard", expage: "payloads/linux.html"}, { title: "KEXEC", desc:"« لودر کرنل لینوکس بطور مستقیم از Orbis OS »", version: "1.0 by ValentineBreize", active: false, icon: "widgets", expage: "payloads/kexec.html"}]
    },
    "BACKUP": {
      index: 4,
      title: "بک آپ",
      selectedIndex: 0,
      active: false,
      icon: "backup",
      items: [{ title: "DUMPER", desc: "« پی لود Dumper که امکان تهیه دامپ یا بکاپ از دیسک بازی و یا عناوین دیجیتالی PS4 را فراهم میکند »", version: "1.8 by xVortex", active: false, icon: "archive", expage: "payloads/vtxdump.html"},{title: "DISC DUMP", desc:"« کپی محتویات از دیسک به حافظه USB »", version: "1.0 by Stooged", active: false, icon: "eject", expage: "payloads/discdump.html"},{title: "PKG BACKUP", desc:"« کپی کردن فایلهای PKG به حافظه USB »", version: "3.0 by Stooged", active: false, icon: "redo", expage: "payloads/pkgbackup.html"},{ title: "DB SG BACKUP", desc:"« تهیه بکاپ از سیو بازیها و بخش های مهم دیتابیس به حافظه USB »", version:"3.0 by Stooged", active: false, icon: "save", expage: "payloads/dbsg.html" }, { title: "DB RESTORE", desc:"« بازگردانی بکاپ تهیه شده از حافظه USB به کنسول »", version: "2.0 by Stooged", active: false, icon: "publish", expage: "payloads/dbrestore1.html" }, { title: "DB RESTORE UNDO", desc:"« حذف بکاپ به اشتباه بازگردانی شده »", version: "2.0 by Stooged modded by Leeful", active: false, icon: "delete", expage: "payloads/dbrestoreUNDO1.html" },{title: "APPTOUSB", desc:"« انتقال بازی نصب شده از کنسول به حافظه خارجی با فرمت ExFat »", version: "5.0 by Stooged", active: false, icon: "storage", expage: "payloads/apptousb.html"}, { title: "APPTOUSB ALT", desc:"« همانند پی لود AppToUSB اما بطور انحصاری برای پورت USB1 »", version: "1.0 mod by Jakkal", active: false, icon: "dns", expage: "payloads/apptousb1alt.html"}, { title: "USB FAKE PACKAGES", desc:"« پی لود دیگری بر اساس pkg2usb از SiSTRo و AppToUSB از Stooged »", version: "1.1b by Specialfood", active: false, icon: "usb", expage: "payloads/usbfpkgs.html" }, { title: "DUMPER + AUTH", desc:"« نسخه آزمایشی پی لود AUTH+DUMPER »", version: "0.1(Zer0xFF)", active: false, icon: "gradient", expage: "payloads/dumpauth.html"},]
    },
    "SYSTEM": {
	  index: 5,
      title: "سیستم",
      selectedIndex: 0,
      active: false,
      icon: "home",
	  items: [{title: "AVATAR DUMPER", desc:"« دامپ کردن فایلهای آواتار پروفایل کاربر به حافظه USB که بصورت ExFat فرمت شده است »", version: "1.0 by Red-J", active: false, icon: "contacts", expage: "payloads/avadump.html" },{title: "AVATAR INJECTOR", desc:"« تزریق مجدد فایلهای آواتار پروفایل کاربر که در حافظه USB فرمت شده بصورت ExFat قرار گرفته است »", version: "1.0 by Red-J", active: false, icon: "portrait", expage: "payloads/avainject.html" },{title: "AUTH INFO DUMPER", desc:"« دامپ کردن auth_info.log به حافظه USB exFat »", version: "1.0 by Stooged", active: false, icon: "details", expage: "payloads/authdump.html" }, { title: "EVERSION", desc:"« دامپ کننده کرنل جاری به حافظه USB – سازگار با فریمور 4.05 تا 5.05 »", version: "1.4 by CelesteBlue", active: false, icon: "memory", expage: "payloads/everkdump.html" }, { title: "KERNEL DUMPER", desc:"« دامپ کننده کرنل جاری به حافظه USB »", version: "2.0 by Stooged", active: false, icon: "work", expage: "payloads/kdumper.html" }, { title: "FS DUMPER", desc:"« دامپ کننده فایلهای سیستمی کنسول به حافظه USB »", version: "1.0 by Stooged", active: false, icon: "pageview", expage: "payloads/fsdumper.html" }, { title: "MIRA", desc: "« فعالسازی MIRA و ابزار ثبت لاگ کرنل از طریق پورت 9999/9998 »", version: "1.0 by OpenOrbisTeam", active: false, icon: "nfc", expage: "payloads/mira.html" }, { title: "BINLOADER", desc: "« فعالسازی BINLOADER از طریق پورت 9020 »", version: "1.0 by OpenOrbisTeam", active: false, icon: "send", expage: "payloads/binloader.html" }]
	},
  "TOOLS": {
      index: 6,
      title: "ابزارها",
      selectedIndex: 0,
      active: false,
      icon: "settings",
      items: [{title: "Fan Control", desc:"« تنظیم دمای دلخواه جهت چرخش بیشتر دور فن که تا زمانی که برق کنسول قطع نشود فعال است. (پیشفرض 79) »", version: "3.0 by Leeful", active: false, icon: "camera", expage: "payloads/FanControl.html" }, {title: "Rif Renamer", desc:"« با اجرای این پی لود بازی هایی که با MiraHen نصب شده باشند، با HEN نیز اجرا خواهند شد »", version: "1.0 by Al-Azif", active: false, icon: "attachment", expage: "payloads/RifRenamer.html" }, {title: "PS4REN", desc:"« فعالسازی قابلیت Remote Play از طریق شبیه سازی IDU »", version: "1.0 by SiSTRO", active: false, icon: "tablet", expage: "payloads/GTA/PS4REN.html" },{title: "SAVE MOUNTER", desc:"« Mount کردن Save بازیها بدون نیاز به Save Wizard »", version: "1.4 by Chendochap", active: false, icon: "folder", expage: "payloads/savemounter.html" },{ title: "ORBISAFR", desc:"« ابزار OrbisAFR برای انجام Game Modding »", version: "1.0 by TheoryWrong", active: false, icon: "layers", expage: "payloads/orbisafr.html" },{ title: "SYSCALL 9", desc: "« فعالسازی UART »", version: "1.0 by Lightningmods", active: false, icon: "", expage: "payloads/GTA/sys9.html" },{ title: "VR ENABLER", desc:"« فعال کردن هدست VR در صورت نیاز که باید بعد از پی لود HEN انتخاب شود »", version: "1.0 by Stooged", active: false, icon: "visibility", expage: "payloads/vr.html" }, { title: "FTP", desc: "« پی لود FTP که بستر ارتباطی لازم جهت اتصال کنسول و کامپیوتر را از طریق پروتکل FTP فراهم می سازد »", version: "1.3 by xVortex", active: false, icon: "wifi", expage: "payloads/vtxftp.html"}, { title: "FTP + FULL R/W", desc:"« راه اندازی پروتکل FTP و همچنین دسترسی Read/Write به تمامی 16 پارتیشن موجود در هارد کنسول »", version: "1.0 by Lightningmods", active: false, icon: "warning", expage: "payloads/ftprw.html" }, { title: "REACTPSPLUS", desc:"« پی لود ReactPSPlus که امکان فعالسازی مجدد عناوینی که از PSN  خریداری شده و غیرفعال شده اند را فراهم میکند »", version: "2012 edition by Zer0xFF", active: false, icon: "restore", expage: "payloads/react.html" }, { title: "UNREACTPSPLUS", desc:"« غیرفعال کردن پی لود REACTPSPLUS »", version: "2018 edition by Zer0xFF", active: false, icon: "update", expage: "payloads/unreact.html" }, { title: "REACTPSPLUS", desc:"« تغییر RTC کنسول به مقدار دلخواه که با پی لود ReActPSPlus در ارتباط است »", version: "1.0 by Zer0xFF mod by Leeful", active: false, icon: "timelapse", expage: "payloads/reactloader.html" }]
    },
	"CHEATS": {
      index: 7,
      title: "CHEATS",
      selectedIndex: 0,
      active: false,
      icon: "search",
      items: [{ title: "WEBRTE", desc:"« پی لود WEBRTE جهت استفاده از Cheat »", version: "1.00 by Tylermods", active: false, icon: "whatshot", expage: "payloads/webrte.html" },{ title: "ORBISDBG", desc:"« پی لود Debugger جهت حافظه و پردازش ها – مرتبط با فایل ORBISDBGUI »", version: "1.00 by Skiffaw", active: false, icon: "gradient", expage: "payloads/orbdbg.html" },{ title: "MEMAPI", desc:"« ابزارهای Server، Debugger و Library »", version: "1.00 by McCaulay", active: false, icon: "subject", expage: "payloads/memapi.html" }, { title: "IH RTM EDITOR", desc:"« ابزار چیت براساس قابلیت های RTM »", version: "1.0.0.0 by Intention Hackers", active: false, icon: "dvr", expage: "payloads/ihrtm.html" },{ title: "COMMUNITY TRAINER", desc:"« ابزار چیت Community »", version: "2.1.0.0 by DeathRGH", active: false, icon: "comment", expage: "payloads/community.html" }, { title: "PS4 TRAINER", desc:"« ابزار ترینر جهت استفاده از چیت »", version: "1.4.91.113 by Tylermods", active: false, icon: "code", expage: "payloads/tylermods.html" }, { title: "JKPATCH", desc:"« سرور RPC برای پیدا کردن چیت »", version: "1.0 by XEMIO", active: false, icon: "timeline", expage: "payloads/jkpatch.html" }, { title: "DEATHRGH", desc:"« ابزار چیت DeathRGH »", version: "1.6.0.0 by DeathRGH", active: false, icon: "attachment", expage: "payloads/deathrgh.html" }, { title: "PS4 CHEATER", desc:"« ابزاری برای پیدا کردن چیت »", version: "1.4.7 by Chendochap", active: false, icon: "create", expage: "payloads/cheater.html" }, { title: "PS4API SERVER", desc:"« امکان کنترل حافظه بخش بازی در حال اجرا برای ابزارهای RTM/RTE »", version: "1.0 by Helloitu", active: false, icon: "flag", expage: "payloads/ps4api.html" }, { title: "PS4API SERVER", desc:"« امکان کنترل حافظه بخش بازی در حال اجرا برای ابزارهای RTM/RTE »", version: "1.1 by Bisoon", active: false, icon: "transform", expage: "payloads/ps4apibisoon.html" },{title:"DEBUGWATCH", desc:"« ابزاری جهت Debugging با ویژگی های کامل »", version: "1.0.0.0 by Golden", active: false, icon: "watch", expage: "payloads/GTA/Debugwatch.html" },{title:"PLAYENGINE", desc:"« اسکن و ویرایش پردازش های درون حافظه »", version: "2.0 Berkay2578/EpicFail78", active: false, icon: "traffic", expage: "payloads/GTA/Playengine.html" }]
    },
  "GTAV MENUS": {
      index: 8,
      title: "چیت های GTAV",
      selectedIndex: 0,
      active: false,
      icon: "tune",
	  txt1:"[برای فعالسازی ",
      txt2:" + ",
      txt3:" را فشار دهید]",
      items: [{title: "LOTUS 127 - ", button1:"DRBUTTON", button2:"SBUTTON", desc:"« منوی چیت برای بازی GTAV نسخه 1.27 »", version: "1.02 by 0x199", active: false, icon: "spa", expage: "payloads/GTA/GTA_Lotus127.html" },{title: "NOTYOURDOPES 127 - ", button1: "R1BUTTON", button2: "DDBUTTON", desc:"« منوی چیت برای بازی GTAV نسخه 1.27 »", version: "1.0 by Vicodin10", active: false, icon: "casino", expage: "payloads/GTA/GTA_NotYourDopes127.html" }, { title: "LTSMENU 127 - ", button1: "DRBUTTON", button2: "SBUTTON", desc:"« منوی چیت برای بازی GTAV نسخه 1.27 »", version: "1.0 by CMTFrosty (LastTeamStanding)", active: false, icon: "group", expage: "payloads/GTA/GTA_LTS127.html" }, { title: "NOTANOTHERMENU - ", button1: "DRBUTTON", button2: "SBUTTON", desc:"« منوی چیت برای بازی GTAV نسخه 1.00 »", version: "0.1 by David1337hax", active: false, icon: "redeem", expage: "payloads/GTA/GTA_NotAnother.html" }, { title: "NOTANOTHERMENU 127 - ", button1: "DRBUTTON", button2: "SBUTTON", desc:"« منوی چیت برای بازی GTAV نسخه 1.27 »", version: "0.2 by David1337hax", active: false, icon: "redeem", expage: "payloads/GTA/GTA_NotAnother127.html" }, { title: "AP II INTENSE V2 - ", button1: "R1BUTTON", button2: "SBUTTON", desc:"« منوی چیت برای بازی GTAV نسخه 1.00 »", version: "1.1 by EROOTIIK", active: false, icon: "extension", expage: "payloads/GTA/GTA_Intense.html" }, { title: "AP II INTENSE V2 1.27 - ", button1: "R1BUTTON", button2: "SBUTTON", desc:"« منوی چیت برای بازی GTAV نسخه 1.27 »", version: "1.5 by EROOTIIK", active: false, icon: "extension", expage: "payloads/GTA/GTA_Intense127.html" }, { title: "LAMANCE - ", button1: "DRBUTTON", button2: "SBUTTON", desc:"« منوی چیت برای بازی GTAV نسخه 1.00 »", version: "0.8 by David1337hax", active: false, icon: "stars", expage: "payloads/GTA/GTA_Lamance.html" }, { title: "LAMANCE 1.27 - ", button1: "DRBUTTON", button2: "SBUTTON", desc:"« منوی چیت برای بازی GTAV نسخه 1.27 »", version: "0.8 by David1337hax", active: false, icon: "stars", expage: "payloads/GTA/GTA_Lamance127.html" }, { title: "WILDEMODZ - ", button1: "DLBUTTON", button2: "SBUTTON", desc:"« منوی چیت برای بازی GTAV نسخه 1.00 »", version: "1.1 by Wildemodz", active: false, icon: "accessibility", expage: "payloads/GTA/GTA_WildeModz.html" }, { title: "WILDEMODZ 127 - ", button1: "DLBUTTON", button2: "SBUTTON", desc:"« منوی چیت برای بازی GTAV نسخه 1.27 »", version: "1.2 by Wildemodz", active: false, icon: "accessibility", expage: "payloads/GTA/GTA_WildeModz127.html" }, { title: "TEAM PSYCH0S - ", button1: "DLBUTTON", button2: "SBUTTON", desc:"« منوی چیت برای بازی GTAV نسخه 1.00 »", version: "1.0 by AlFaMoDz", active: false, icon: "build", expage: "payloads/GTA/GTA_Psych0s.html" }, { title: "ARABICGUY - ", button1: "L1BUTTON", button2: "R1BUTTON", desc:"« منوی چیت برای بازی GTAV نسخه 1.00 »", version: "1.1 by RF0oDxM0Dz", active: false, icon: "face", expage: "payloads/GTA/GTA_ArabicGuy.html"}, { title: "TRAINER - ", button1: "DRBUTTON", button2: "SBUTTON", desc:"« منوی چیت برای بازی GTAV نسخه 1.00 »", version: "1.0 by David1337hax", active: false, icon: "shop", expage: "payloads/GTA/GTA_Trainer.html"}]
    },
	"OTHER MENUS": {
      index: 9,
      title: "سایر منوها",
      selectedIndex: 0,
      active: false,
      icon: "vibration",
	  txt4:"[",
      txt5:" + ",
      txt6:"] = حالت پرواز ، ",
	  txt7:"] = منوی سریع ، ",
	  txt8:"] = منوی دولوپر ",
      items: [{ title: "THE LAST OF US 1.08", desc:"", button3:"L3BUTTON",button4:"TLBUTTON",button5:"L3BUTTON",button6:"TRBUTTON",button7:"L3BUTTON",button8:"R3BUTTON", version: "2.0 by Vicodin10", active: false, icon: "accessibility", expage: "payloads/GTA/TLOUR.html" },{ title: "UNCHARTED 4 1.00/1.18/1.32", desc:"", button3:"L3BUTTON",button4:"TLBUTTON",button5:"L3BUTTON",button6:"TRBUTTON",button7:"L3BUTTON",button8:"R3BUTTON",button9:"L3BUTTON",button10:"OPBUTTON",txt9:", [ ", txt10:"+ ",txt11:"] = منوی دلخواه", version: "2.0 by Vicodin10", active: false, icon: "exposure", expage: "payloads/GTA/UC4.html" },{ title: "UNCHARTED THE LOST LEGACY 1.00", desc:"", button3:"L3BUTTON",button4:"TLBUTTON",button5:"L3BUTTON",button6:"TRBUTTON",button7:"L3BUTTON",button8:"R3BUTTON",button9:"L3BUTTON",button10:"OPBUTTON",txt9:", [ ", txt10:"+ ",txt11:"] = منوی دلخواه", version: "2.0 by Vicodin10", active: false, icon: "motorcycle", expage: "payloads/GTA/UCTLL.html" } ] 
	 },
	"LAN PLAY": {
      index: 10,
      title: "بازیهای شبکه",
      selectedIndex: 0,
      active: false,
      icon: "",
      items: [{ title: "BO3 COD:ONLINE", desc:"« اجرای بازی COD:Black Ops3 تحت شبکه در سرورهای اختصاصی »", version: "1.0 by TheoryWrong", active: false, icon: "language", expage: "payloads/codonline/BO3.html" }]
	},  
	"MEDIA": {
      index: 11,
      title: "رسانه",
      selectedIndex: 0,
      active: false,
      icon: "subscriptions",
      items: [{title: "MP4PLAYER", desc:"« ابزار Media Player که فایلهای MP4 را از طریق شبکه اجرا می نماید »", version: "1.0 by DEFAULTDNB", active: false, icon: "airplay"}]
	},
	"CACHE": {
      index: 12,
      title: "ذخیره سازی",
      selectedIndex: 0,
      active: false,
      icon: "copyright",
      items: [{title: "SELF-HOST CACHE", desc:"« توسط این پی لود، ابزار Self-Host در مرورگر کنسول بطور کامل کش (ذخیره) شده و از دفعات بعد بصورت آفلاین اجرا خواهد شد »", version: "1.0 by Al-Azif", active: false, icon: "", expage: "payloads/xmbcache.html" }, { title: "USB CACHE INSTALL", desc:"« نصب فایل ApplicationCache.db از حافظه USB »", version: "10.0 by Stooged", active: false, icon: "beenhere", expage: "payloads/usbcacheinstall.html" }, { title: "CACHE INSTALL", desc:"« نصب یک فایل ApplicationCache.db »", version: "10.0 by Stooged", active: false, icon: "book", expage: "payloads/cacheinstall.html" }, { title: "APPLICATION CACHE", desc:"« نصب یک فایل ApplicationCache.db »", version: "2.0 by Hotdogwithmustard", active: false, icon: "loyalty", expage: "payloads/applicationcache.html" }, { title: "HISTORY BLOCKER", desc:"« پی لود History Blocker که قابلیت اجرای اتوماتیک و مجدد آخرین صفحه مرور شده توسط مرورگر را غیرفعال میکند »", version: "2.0 by Stooged", active: false, icon: "bookmarks", expage: "payloads/history.html" }]
	},
	"ABOUT": {
      index: 13,
      title: "درباره سازندگان",
      selectedIndex: 0,
      active: false,
      icon: "help",
      items: [{title: "◄ PS4 Self-Exploit Host (OFW 5.05 Only) ►", desc:"March 2019", version: "v1.5.2 Edited and Translated by SCORPION, X-PROJECT by DEFAULTDNB", active: false, icon: "fingerprint"}]
    },
	"★DEBUG": {
      index: 14,
      title: "★DEBUG",
      selectedIndex: 0,
      active: false,
      icon: "grade",
      items: [{title: "★PAYLOAD", desc: "Test experimental payloads", version:"1.0 by DEFAULTDNB", active: false, icon: "", expage: "payloads/test.html"}]
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
var nCols;
var myNum;
var xmbVue = new Vue({
  el: "#xmb",
  data: model,
  methods: {
    handleKey: function handleKey(dir, val) {
      this.cursor[dir] += val;
      nCols = myNum;
	  //nCols = this.nColumns

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
	  //alert(column, row);
      //update position of elements as well
      var xAccum = (-column - 1) * (ICONSZ);
      if (column == 0) {
        xAccum += ICONSZ;
      }
      var yAccum;

      _.each(this.columns, function (col, colKey) {
        col.active = false;
        yAccum =  - (ICONSZ) * (row + 1);

        col.position.x = xAccum;
        xAccum += ICONSZ;
        if (column === col.index || column === col.index + 1) {
          xAccum += ICONSZ;
        }

        _.each(col.items, function (item, rowN) {
          if (rowN == row && col.index == column) {
            item.active = true;
            col.active = true;
          } else {
            item.active = false;
          }

          if (rowN == row) {
            yAccum += ICONSZ;
          }
          yAccum += ICONSZ;
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
// 27 = O, 112 = /\, 113 = [], 114 = options, 
// 116 = L1, 117 = R1, 118 = L2, 119 = R2, 120 = L3, 121 = R3,
// 37 = left dpad, 38 = up dpad, 39 = right dpad, 40 = down dpad,
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
   window.open("payloads/hen18vrmod.html", "content");
   } else if (key == 117) {
   window.open("payloads/ftprw.html", "content");
   }
};
