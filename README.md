# VV8_PDG_mapping


State of web tracking is different for Desktop and Mobile platforms due to hardware and software level differences. These differences manifest themselves in the choice of fingerprinting activity that can be conducted on either platform. We simply postulate that users of both platforms are tracked in varying degrees and therefore the proposed solutions that mitigate web fingerprinting may not be a fit-for-all solution. For instance, sensor APIs are exposed in mobile devices and can deliver precise information about the user. This technique is unavailable for users of desktop browsers. Therefore, the threat that each user faces on either platform is unique.

While prior research has explored these platform-level tracking differences, their approach has suffered from transparency of web interactions. Their tools relied on script injections for logging dynamic execution or using an open-source tool like openWPM that offers no better accuracy. The issues with these tools are many. First, dynamic execution is not captured entirely as we have to know a priori which APIs we want to log. Secondly, these measurement setups do not generate organic web interactions and are often detectable by websites.

In total, there is a research gap that needs to be filled in understanding the platform-level differences in fingerprinting. 


#### Helper files
subsequence.py - given two execd apis (a list of apis in flow), returns the unique subsequences of execd apis
