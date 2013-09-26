Ext.define('GS.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
         fullscreen: true,
            tabBarPosition: 'bottom',

        items: [
            {
                title: 'Hem',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                 

                html: [
                     '<img  src="resources/icons/logo.png" />',
                        '<h1>Välkommen</h1>',
                        "<p>Vi grundades 2005 och är specialiserade på Läcksökning , skadeorsaksutredning och termografering med över 50 års samlad erfarenhet av branschen. Bland våra kunder finns bland andra försäkringsbolag, förvaltningsbolag, bostadsrättsföreningar, energiverk och privatpersoner.</p>",
                       
                ].join("")
            },
             // This is the home page, just some simple html
                {
                title: 'Webb',
                iconCls: 'browser',
id: 'feedTab',
	 		scroll : false,
                 

              
                 

                 xtype: 'panel',
    styleHtmlContent : true,

                html: '<div style="height: 100%;"><iframe style="width:100%;height:100%;" src="http://www.aquademica.se/">Your device does not support iframes.</iframe></div>',
            },
			{
                title: 'Tjänster',
                iconCls: 'settings2',

                styleHtmlContent: true,
                scrollable: true,

                 

                html: [
                     '<div style="width:100%;margin-left: 15px;"><div style="width:33%; float:left;"><img  src="resources/icons/1.png" /><p style="font-size:0.8em;">Läcksökning</p></div><div style="width:33%; float:left;"><img  src="resources/icons/4.png" /><p style="font-size:0.8em;">Fuktmätning</p></div><div style="width:33%; float:right;"><img  src="resources/icons/3.png" /><p style="font-size:0.8em;">Fuktutredning</p></div></div>',
                      
                        "",
                       
                ].join("")
            },
			{
                title: 'Hitta oss',
                iconCls: 'maps',
 
xtype: 'map',
    scroll: false,
    useCurrentLocation: false,
    id: 'googleMaps',
    mapOptions: {
       zoom: 15,
       navigationControl: false,
       streetViewControl: false,
       mapTypeControl: false,
       center : new google.maps.LatLng(59.37772,18.033596)
    },
    listeners: {
       maprender: function(comp, maps){
          
          maps.setMapTypeId(google.maps.MapTypeId.HYBRID);
          var infowindow = new google.maps.InfoWindow({ content: '' });

          var p = new google.maps.LatLng(59.37772,18.033596);
          var marker = new google.maps.Marker({ map : maps, position : p });
         google.maps.event.addListener(marker, 'click', function() { infowindow.open(maps, marker); });
        }
      }
            },
			{
                title: 'Kontakta oss',
                iconCls: 'mail',

               xtype: 'formpanel',
                    
                   
                    url: 'contact.php',
                    layout: 'vbox',

                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Contact Us',
                            instructions: 'Email address is optional',

                            items: [
                                {
                                    xtype: 'textfield',
                                    label: 'Name',
                                    name: 'name'
                                },
                                {
                                    xtype: 'emailfield',
                                    label: 'Email',
                                    name: 'email'
                                },
                                {
                                    xtype: 'textareafield',
                                    label: 'Message',
                                    name: 'message',
                                    height: 90
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            text: 'Send',
                            ui: 'confirm',

                            // The handler is called when the button is tapped
                            handler: function() {

                                // This looks up the items stack above, getting a reference to the first form it see
                                var form = this.up('formpanel');

                                // Sends an AJAX request with the form data to the url specified above (contact.php).
                                // The success callback is called if we get a non-error response from the server
                                form.submit({
                                    success: function() {
                                        // The callback function is run when the user taps the 'ok' button
                                        Ext.Msg.alert('Thank You', 'Your message has been received', function() {
                                            form.reset();
                                        });
                                    }
                                });
                            }
                        }
                    ]
            },
        ]
    }
});
