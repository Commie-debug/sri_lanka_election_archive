const colourList = [{
        word: "SLFP",
        style: "color: #00008B; font-weight: bold;"
    },
    {
        word: "UNP",
        style: "color: #006400; font-weight: bold;"
    },
    {
        word: "TULF",
        style: "color: #F7D917; font-weight: bold;"
    },
    {
        word: "CWC",
        style: "color: #E52B50; font-weight: bold;"
    },
    {
        word: "ACTC",
        style: "color: #FDCC01; font-weight: bold;"
    },
    {
        word: "CPSL",
        style: "color: #65000B; font-weight: bold;"
    },
    {
        word: "SLPP",
        style: "color: #E52B50; font-weight: bold;"
    },
    {
        word: "DPLF",
        style: "color: #CE2029; font-weight: bold;"
    },
    {
        word: "PFLT",
        style: "color: #DC143C; font-weight: bold;"
    },
    {
        word: "SLMC",
        style: "color: #2DCF3E; font-weight: bold;"
    },
    {
        word: "NPP",
        style: "color: #9F005D; font-weight: bold;"
    },
    {
        word: "JVP",
        style: "color: #FF2226; font-weight: bold;"
    },
    {
        word: "LSSP",
        style: "color: #A91101; font-weight: bold;"
    },
    {
        word: "NSSP",
        style: "color: #FF8080; font-weight: bold;"
    },
    {
        word: "MEP",
        style: "color: #f98538; font-weight: bold;"
    },
    {
        word: "EROS",
        style: "color: #FF2400; font-weight: bold;"
    },
    {
        word: "SLMP",
        style: "color: #663399; font-weight: bold;"
    },
    {
        word: "UCPF",
        style: "color: #9C1600; font-weight: bold;"
    },
    {
        word: "PLOTE",
        style: "color: #CE2029; font-weight: bold;"
    },
    {
        word: "TELO",
        style: "color: #893F45; font-weight: bold;"
    },
    {
        word: "EPRLF",
        style: "color: #FF4500; font-weight: bold;"
    },
    {
        word: "DUNF",
        style: "color: #128812; font-weight: bold;"
    },
    {
        word: "ULPP",
        style: "color: #DAEA67; font-weight: bold;"
    },
    {
        word: "EPDP",
        style: "color: #F0BC02; font-weight: bold;"
    },
    {
        word: "ENDLF",
        style: "color: #FF5E5E; font-weight: bold;"
    },
    {
        word: "Naxal",
        style: "color: #b20000; font-weight: bold;"
    },
    {
        word: "ITAK",
        style: "color: #ffd000; font-weight: bold;"
    },
    {
        word: "NLF",
        style: "color: #193db1; font-weight: bold;"
    },
    {
        word: "SLFSP",
        style: "color: #c23434; font-weight: bold;"
    },
    {
        word: "LDP",
        style: "color: #404dff; font-weight: bold;"
    },
    {
        word: "SPFC",
        style: "color: #ff6040; font-weight: bold;"
    },
    {
        word: "BBF",
        style: "color: #008eb2; font-weight: bold;"
    },
    {
        word: "SLNF",
        style: "color: #1e4fff; font-weight: bold;"
    },
    {
        word: "TSF",
        style: "color: #d5bb12; font-weight: bold;"
    },
    {
        word: "TRF",
        style: "color: #d5a112; font-weight: bold;"
    },
    {
        word: "CLP",
        style: "color: #db4949; font-weight: bold;"
    },
    {
        word: "CPC",
        style: "color: #65000B; font-weight: bold;"
    },
    {
        word: "BSP-BLP",
        style: "color: #af0000; font-weight: bold;"
    },
    {
        word: "CIC",
        style: "color: #E52B50; font-weight: bold;"
    },
    {
        word: "PA",
        style: "color: #0202d4; font-weight: bold;"
    },
    {
        word: "UPFA",
        style: "color: #0202d4; font-weight: bold;"
    },
    {
        word: "SMBP",
        style: "color: #00008B; font-weight: bold;"
    },
    {
        word: "Left & Democratic Alliance",
        style: "color: #ff0033b5; font-weight: bold;"
    },
    {
        word: "NUA",
        style: "color: #2DCF3E; font-weight: bold;"
    },
    {
        word: "SH",
        style: "color: #eac42d; font-weight: bold;"
    },
    {
        word: "TNA",
        style: "color: #d5a112; font-weight: bold;"
    },
    {
        word: "UNF",
        style: "color: #006400; font-weight: bold;"
    },
    {
        word: "JHU",
        style: "color: #eac42d; font-weight: bold;"
    },
    {
        word: "NDF",
        style: "color: #006400; font-weight: bold;"
    },
    {
        word: "UNFGG",
        style: "color: #006400; font-weight: bold;"
    },
    {
        word: "DNA",
        style: "color: #ffd000; font-weight: bold;"
    },
    {
        word: "TNPF",
        style: "color: #eac42d; font-weight: bold;"
    },
    {
        word: "TMVP",
        style: "color: #632e2e; font-weight: bold;"
    },
    {
        word: "SLP",
        style: "color: #0c95ad; font-weight: bold;"
    },
];

const tooltipList = [{
    searchString: "SLFP",
    explanationText: "<img src=img/logos/SLFP_Logo.png> Sri Lanka Freedom Party"
    },
    {
    searchString: "UNFGG",
    explanationText: "United National Front for Good Governance"
    },
    {
    searchString: "SLP",
    explanationText: "Sri Lanka Labour Party"
    },
    {
    searchString: "TMVP",
    explanationText: "Tamil Makkal Viduthalai Pullikal"
    },
    {
    searchString: "TNPF",
    explanationText: "Tamil National People's Front"
    },
    {
    searchString: "DNA",
    explanationText: "Democratic National Alliance"
    },
    {
    searchString: "NDF",
    explanationText: "New Democratic Front"
    },
    {
    searchString: "JHU",
    explanationText: "Jathika Hela Urumaya <br> National Heritage Party"
    },
    {
    searchString: "UPFA",
    explanationText: "United People's Freedom Alliance"
    },
    {
    searchString: "UNF",
    explanationText: "United National Front"
    },
    {
    searchString: "SH",
    explanationText: "Sinhala Heritage"
    },
    {
    searchString: "TNA",
    explanationText: "Tamil National Alliance"
    },
    {
    searchString: "NUA",
    explanationText: "National Unity Alliance"
    },
    {
    searchString: "SMBP",
    explanationText: "Sinhalaye Mahasammatha Bhoomiputra Pakshaya <br> Motherland People's Party"
    },
    {
    searchString: "UNP",
    explanationText: "<img src=img/logos/UNP_Logo.png> United National Party "
    },
    {
    searchString: "TULF",
    explanationText: "<img src=img/logos/TULF_Logo.png> Tamil United Liberation Front"
    },
    {
    searchString: "CWC",
    explanationText: "<img src=img/logos/CWC_Logo.png> Ceylon Workers Congress"
    },
    {
    searchString: "ACTC",
    explanationText: "<img src=img/logos/ACTC_Logo.png> All Ceylon Tamil Congress"
    },
    {
    searchString: "CPSL",
    explanationText: "<img src=img/logos/CPSL_Logo.png> Communist Party Of Sri Lanka"
    },
    {
    searchString: "SLPP",
    explanationText: "<img src=img/logos/SLPP_Logo.png> Sri Lanka Podujana Peramuna <br> (Sri Lanka Peoples Front)"
    },
    {
    searchString: "DPLF",
    explanationText: "<img src=img/logos/DPLF_Logo.png> Democratic Peoples Liberation Front"
    },
    {
    searchString: "PFLT",
    explanationText: "<img src=img/logos/PFLT_Logo.png> Peoples Front Of Liberation Tigers"
    },
    {
    searchString: "SLMC",
    explanationText: "<img src=img/logos/SLMC_Logo.png> Sri Lanka Muslim Congress"
    },
    {
    searchString: "NPP",
    explanationText: "<img src=img/logos/NPP_Logo.png> National Peoples Power"
    },
    {
    searchString: "JVP",
    explanationText: "<img src=img/logos/JVP_Logo.png> Janatha Vimukthi Peramuna <br> (Peoples Liberation Front)"
    },
    {
    searchString: "LSSP",
    explanationText: "<img src=img/logos/LSSP_Logo.png> Lanka Sama Samaja Party <br> (Lanka Equal Society Party)"
    },
    {
    searchString: "NSSP",
    explanationText: "<img src=img/logos/NSSP_Logo.png> Nava Sama Samaja Party <br> (New Equal Society Party)"
    },
    {
    searchString: "MEP",
    explanationText: "<img src=img/logos/MEP_Logo.png> Mahajana Eksath Peramuna <br> (Peoples United Front)"
    },
    {
    searchString: "ULPP",
    explanationText: "<img src=img/logos/ULPP_Logo.png> United Lanka <br> People's Party"
    },
    {
    searchString: "DUNF",
    explanationText: "<img src=img/logos/DUNF_Logo.png> Democratic United <br> National Front"
    },
    {
    searchString: "EROS",
    explanationText: "<img src=img/logos/EROS_Logo.png> Eelam Revolutionary <br> Organisation Of Students"
    },
    {
    searchString: "SLMP",
    explanationText: "<img src=img/logos/SLMP_Logo.png> Sri Lanka Mahajana Pakshaya <br> (Sri Lanka Peoples Party)"
    },
    {
    searchString: "EPRLF",
    explanationText: "<img src=img/logos/EPRLF_Logo.png> Eelam Peoples Revolutionary <br> Liberation Front"
    },
    {
    searchString: "TELO",
    explanationText: "<img src=img/logos/TELO_Logo.png> Tamil Eelam <br> Liberation Organisation"
    },
    {
    searchString: "PLOTE",
    explanationText: "<img src=img/logos/PLOTE_Logo.png> Peoples Liberation <br> Organisation Of Tamil Eelam"
    },
    {
    searchString: "EPDP",
    explanationText: "<img src=img/logos/EPDP_Logo.png> Eelam Peoples Democratic Party"
    },
    {
    searchString: "ENDLF",
    explanationText: "<img src=img/logos/ENDLF_Logo.png> Eelam National Democratic <br> Liberation Front"
    },
    {
    searchString: "IPKF",
    explanationText: "<img src=img/logos/IPKF_Logo.png> Indian Peace <br> Keeping Force"
    },
    {
    searchString: "UCPF",
    explanationText: "<img src=img/logos/UCPF_Logo.png> Up Country <br> Peoples Front"
    },
    {
    searchString: "Naxal",
    explanationText: "<img src=img/logos/Naxal_Logo.png> Naxalite-Maoist(Indian Maoist insurgents)"
    },
    {
    searchString: "Naxalite",
    explanationText: "<img src=img/logos/Naxal_Logo.png> Naxalite-Maoist(Indian Maoist insurgents)"
    },
    {
    searchString: "ITAK",
    explanationText: "<img src=img/logos/ITAK_Logo.png> Ilankai Tamil Arasu Kachchi <br> Sri Lanka Tamil Federal Party"
    },
    {
    searchString: "NLF",
    explanationText: "<img src=img/logos/NLF_Logo.png> Jathika Vimukthi Peramuna <br> National Liberation Front"
    },
    {
    searchString: "SLFSP",
    explanationText: "<img src=img/logos/SLFSP_Logo.png> Sri Lanka Freedom Socialist Party "
    },
    {
    searchString: "LDP",
    explanationText: "<img src=img/logos/LDP_Logo.png> Lanka Prajathanthravadi Pakshaya <br> Lanka Democratic Party "
    },
    {
    searchString: "SPFC",
    explanationText: " Socialist Peoples Front of Ceylon "
    },
    {
    searchString: "BBF",
    explanationText: " Bosath Bandaranaike Front "
    },
    {
    searchString: "SLNF",
    explanationText: " Sri Lanka National Front "
    },
    {
    searchString: "TSF",
    explanationText: " Tamil Speaking Front "
    },
    {
    searchString: "TRF",
    explanationText: " Tamil Resistance Front "
    },
    {
    searchString: "CLP",
    explanationText: " Ceylon Labour Party "
    },
    {
    searchString: "CPC",
    explanationText: "<img src=img/logos/CPSL_Logo.png> Communist Party of Ceylon "
    },
    {
    searchString: "CIC",
    explanationText: "<img src=img/logos/CWC_Logo.png> Ceylon Indian Congress "
    },
    {
    searchString: "BSP-BLP",
    explanationText: "<img src=img/logos/CPSL_Logo.png> Bolshevik Socialist Party<br>--------<br>Bolshevik-Leninist Party of India, Ceylon & Burma "
    },
    {
    searchString: "PA",
    explanationText: " Peoples Alliance "
    },


];



