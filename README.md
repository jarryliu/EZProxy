## EZProxy
----------------
A safari extension for automatic load journal sites with EZProxy.

###How to Install:
----------------
1. checkout the code: 

	`git clone https://github.com/jarryliu/EZProxy.git`
	
2. Enable Develop menu in menu bar, `Preferences->Advance->Show Develop menu` in menu bar.
3. Open Extension Builder in menu, `Develop->Show Extension Builder`.
4. Add Extension, select the directory `EZProxy.safariextension`.
5. Click install and input your password.
6. Read to go.

###How to use:
-------------------
1. To change the settings, click and hold the toolbar to open the menu, or go to `Preferences->Extension->EZProxy`.
2. If manually load proxy is enabled, click the toolbar button to manually load link with proxy 
3. If automatically load proxy is enabled, a known journal site will be loaded with proxy automatically.


###Version Log
-------------------
####v0.1, Date: Aug 26, 2015
1. Click the button to manually use EZProxy
2. Automaticly load proxy after load for common journal sites (support by WUSTL) like acm, ieee, etc.
3. Only support for WUSTL EZProxy

####v0.2, Date: Aug 28, 2015
1. Add Menu for enabling/disabling automatic and manual proxy loading.
2. Solve the bug of infinite loading in campus network (where proxy link will be directed to original link).