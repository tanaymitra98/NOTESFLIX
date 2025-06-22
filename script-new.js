
const subjectLinks = {
  'BCHY101L': 'https://drive.google.com/drive/folders/1zQRWlmKTv-30Nq8ZyhUHM2agbxyDO_mn',
  'BECE102L': 'https://drive.google.com/drive/folders/1w2bpMe-FM288MU21bqh3MzL-VUokmD4v',
  'BECE201L': 'https://drive.google.com/open?id=1wrkDpIH2hS8wTygn2UGG6sUtO6-8xjdY&usp=drive_copy',
  'BECE203L': 'https://drive.google.com/open?id=1uATK7VMJUkXcilpQHkWoKxBCcl4V7sCO&usp=drive_copy',
  'BEEE102L': 'https://drive.google.com/open?id=1qAig7bUHDHhgzE2NctTO3GcCT9JOSQeu&usp=drive_copy',
  'BENG101L': 'https://drive.google.com/open?id=1qQ09nwVwEmFdYRAIDmPfe4pJTYC6abEw&usp=drive_copy',
  'BMAT101L': 'https://drive.google.com/open?id=1BlWwX07_IYJOr_9IlONZnn8EmcsBGH3k&usp=drive_copy',
  'BMAT102L': 'https://drive.google.com/open?id=10v1MVAcrpkEM_Q94mBpvllOE94oxeFm_&usp=drive_copy',
  'BPHY101L': 'https://drive.google.com/open?id=148CVLjG6KJAUyCaUNh_IWcNqRBM6ZCt7&usp=drive_copy',
  
  'BSTS301P': 'https://drive.google.com/open?id=1KhCXmqWT-2Wl_QpkRkZiARZlcyxp7v-M&usp=drive_copy',
  'BECE206P': 'https://drive.google.com/open?id=1lGTZCGp-7Z7zH3SKwCcQDO9LMkFOgj1G&usp=drive_copy', 
  'BECE206L': 'https://drive.google.com/open?id=14Ot0sHfZ67L_A_WEElh8CZJusKaMaPqu&usp=drive_copy', 
  'BECE304P': 'https://drive.google.com/open?id=1TLhjN7wbfbemyjhkBQllmxYNVvGMuEOd&usp=drive_copy', 
  'BECE304L': 'https://drive.google.com/open?id=1CsAv4R9N7Za0bIyI0ERTrCnr4Fm6-4hn&usp=drive_copy', 
  'BECE305L': 'https://drive.google.com/open?id=148rToqvD7USghsf1EAmXAnJ8QejctbBi&usp=drive_copy', 
  'BECE305P': 'https://drive.google.com/open?id=1jyew3l2g9MfzYOujIL170WlCSipsYCgl&usp=drive_copy',
  'BCSE306L': 'https://drive.google.com/open?id=1MUz8LbPKI_Q4BDJDwe2HUiJ7QjHA9rRA&usp=drive_copy', 
  'BCSE428L': 'https://drive.google.com/open?id=1t4T2sDAqWLhnMQwsoJsl4fWu7GCBv4Bq&usp=drive_copy', 
  'BECE355L': 'https://drive.google.com/open?id=1O3qoSCVoPFx1eKwccEsyeyDMOCrjJc2N&usp=drive_copy', 
  'BCSE 355L': 'https://drive.google.com/open?id=1adnLY6SsJpBHFeJXmVOmBixaSHe0J4ne&usp=drive_copy', 
  'BCSE427L': 'https://drive.google.com/open?id=1EpZbti1kJ67tEASvFbIGysXgwFw8v_bV&usp=drive_copy', 
  'BCSE307P': 'https://drive.google.com/open?id=1V0meEVs57VyJ-NMWAN2ckzz2mDAWrTZl&usp=drive_copy', 
  'BCSE307L': 'https://drive.google.com/open?id=138olo7C60V4Sjl8knbb-mpeh56pZVEHW&usp=drive_copy', 
  'BMAT201L': 'https://drive.google.com/open?id=1vznGfhkzAjvYKbfObwKpiudfXxlTy80R&usp=drive_copy', 
  'BCSE205L': 'https://drive.google.com/open?id=1UF-YTfqB2lXKdpnCucA1Czn1v1rT2_8v&usp=drive_copy', 
  'BECE401L': 'https://drive.google.com/open?id=1YQmTve6qFFGrQe3x4xbooDzrrKEkZzYP&usp=drive_copy', 
  'BCSE308P': 'https://drive.google.com/open?id=1TE_n7W5QeL2eN-N25-DuIJgALjRjOh7h&usp=drive_copy', 
  'BCSE308L': 'https://drive.google.com/open?id=1qTXe-ciA2K-l8DWQWNH6vSBF9JGIS4PV&usp=drive_copy', 
  'COMPUTERVI': 'https://drive.google.com/open?id=1pCubI5QBpcihzf49Aj4tCe7-4CT0UxYQ&usp=drive_copy', 
  'BECE302L': 'https://drive.google.com/open?id=1utVvYhp9T32Rhj1r_tPFzVCJWCAV72NZ&usp=drive_copy', 
  'BCSE309L': 'https://drive.google.com/open?id=1sRtsixgLzjM2Z6hfkWDtPCSqKwIZmSgY&usp=drive_copy', 
  'BECE411L': 'https://drive.google.com/open?id=1_hY-YbBeaqbnMZ388lkttLRI3tG0MV1y&usp=drive_copy', 
  'BCSE302L': 'https://drive.google.com/open?id=1IF7Jfm7OhsqDzaytQOEs6Pd93X93ZPiN&usp=drive_copy', 
  'BCSE302P': 'https://drive.google.com/open?id=138FLymG3URCSgmWP8g4406CYDRK1n86-&usp=drive_copy', 
  'BCSE332L': 'https://drive.google.com/open?id=1xeuKIiA3sO75sCliBFV6H2dv1ct73tdh&usp=drive_copy', // DEEP LEARNING (BCSE332L)
  'BCSE204L': 'https://drive.google.com/open?id=1ei1zJjyS9JyQqlHhTNNXnJusbja5WhMB&usp=drive_copy', // DESIGN AND ANALYSIS OF LALGORITHMS(BCSE204L)
  'BCSE204P': 'https://drive.google.com/open?id=10xMqZfg9zxfydlMgGjkPOYk0vhyQ3d2i&usp=drive_copy', // DESIGN AND ANALYSIS OF LALGORITHMS(BCSE204P)
  'BCSE316L': 'https://drive.google.com/open?id=1ywql_wXtzHMFCkpS7XAj5g41DmgSZZdA&usp=drive_copy', // DESIGN OF SMART LCITIES(BCSE316L)
  'BECE306L': 'https://drive.google.com/open?id=1eWxyHrJrHEivgpqN57WOwK_dh6EMyTy6&usp=drive_copy', // DIGITAL COMMUNICATION SYSTEMS (BECE306L)
  'BECE306P': 'https://drive.google.com/open?id=1r7PcPcQYfbVNADEshhPXcbsDuFwsuQd_&usp=drive_copy', // DIGITAL COMMUNICATION SYSTEMS (BECE306P)
  'BCSE403L': 'https://drive.google.com/open?id=1Yjp4Zcu5tUXCiX67y_SCn8anRndAb_m8&usp=drive_copy', // DIGITAL IMAGE LPROCESSING(BCSE403L)
  'BMAT205L': 'https://drive.google.com/open?id=16niVui1AkVZatwXwzy3PTNlWI4c_xa3m&usp=drive_copy', // DISCRETE MATHS AND GRAPH LTHEORY(BMAT205L)
  'BCSE202P': 'https://drive.google.com/open?id=1G6ElHQmfswyqpKAjYSNkss6LXtwWLLiQ&usp=drive_copy', // DSA LLAB(BCSE202P)
  'BCSE202L': 'https://drive.google.com/open?id=1-RPc6u8dWNTT61gQzalJRmNJwAGeaOY1&usp=drive_copy', // LDSA(BCSE202L)
  'BECE102P': 'https://drive.google.com/open?id=1qvxUY7SRD-VbTP48Y8XaX8cktl7-oH3a&usp=drive_copy', // DSD LLAB(BECE102P)
  'BECE102L': 'https://drive.google.com/open?id=1dDa51V9CaN4PK8t78VBnW_IggcXM81tM&usp=drive_copy', // LDSD(BECE102L)
  'BECE301P': 'https://drive.google.com/open?id=1MeMTCSbuwQINw3jnjgdqcn7vr9gZBg3C&usp=drive_copy', // DSP LLAB(BECE301P)
  'BECE301L': 'https://drive.google.com/open?id=1CLCW9UQnglE4kVMIndVNiGy0O8D-adpm&usp=drive_copy', // LDSP(BECE301L)
  'BECE320E': 'https://drive.google.com/open?id=1PlTHHbxZxvpD-PKxuFtmHfU9lqRPtFTJ&usp=drive_copy', // Embedded C Programming(BECE320E)
  'BECE403E': 'https://drive.google.com/open?id=1-6Kj_i4hp52AIKHD2V3GsJ0rI5X8WlXa&usp=drive_copy', // Embedded Systems Design(BECE403E)
  'BCSE305L': 'https://drive.google.com/open?id=1mRLMrJPb8sq_Sl_hdLjekJG8iu-8v21k&usp=drive_copy', // Embedded Systems(BCSE305L)
  'BECE205L': 'https://drive.google.com/open?id=1xW9pwj9xtJVkdH_NAJwuYvz392xDLkX4&usp=drive_copy', // LEMT(BECE205L)
  'BCSE418L': 'https://drive.google.com/open?id=1MxOd1GfiUtJzMC2XGL7t-LxP4GBAWo-w&usp=drive_copy', // Explainable LAI(BCSE418L)
  'FL': 'https://drive.google.com/open?id=1G6AA8_kf5VRJu7ZsRhM_UM1iRRLnkXA0&usp=drive_copy', // FOREIGN LANGUAGE
  'BCSE324L': 'https://drive.google.com/open?id=1nLDR_j5wzbRQp5fEghvsqOERZLRvi7QQ&usp=drive_copy', // Foundations of Blockchain Technology(BCSE324L)
  'BCSE206L': 'https://drive.google.com/open?id=14Fyw5CI_NgZQJyNhfv1cvi4x5y9RmRVH&usp=drive_copy', // Foundations of Data Science(BCSE206L)
  'BECE406E': 'https://drive.google.com/open?id=19YfQjBmtdxVsyX8KAYsB-rUnD6KX43Bu&usp=drive_copy', // FPGA BASED SYSTEM LDESIGN(BECE406E)
  'BCSE313L': 'https://drive.google.com/open?id=1nWlFisAPhgZ4xh7-4xup9klC-y6viowj&usp=drive_copy', // FUNDAMENTALS OF FOG EDGE AND COMPUTING (BCSE313L)
  'BCSE416L': 'https://drive.google.com/open?id=1JKVzuFAOyGxvshMjYRKlDQs6XxkQ4VGE&usp=drive_copy', // Game Programming(BCSE416L)
  'BCLE214L': 'https://drive.google.com/open?id=1wfnDCO78q3aVk_ZktcJ-AmQvarDsuQ8_&usp=drive_copy', // GLOBAL WARMING (BCLE214L)
  'BCSE414L': 'https://drive.google.com/open?id=1a0rIIqolCJqfMiaJeqFbhOHhmRoMzbmN&usp=drive_copy', // High Performance Computing(BCSE414L)
  'BCSE415L': 'https://drive.google.com/open?id=12EgftBa0Qo07ujBsnWUAaXiXQwnCR-qy&usp=drive_copy', // HUMAN COMPUTER LINTERACTION(BCSE415L)
  'BCSE404L': 'https://drive.google.com/open?id=1eVvjyvcdngx8kF8KWsXc9gAYpWFbzA8N&usp=drive_copy', // Internet and Web Programming (BCSE404L)
  'BCSE401L': 'https://drive.google.com/open?id=1qdP6QmoNeZsNln7-UrSY-QEkdPUOvjmf&usp=drive_copy', // Internet of Things(BCSE401L)
  'BECE351E': 'https://drive.google.com/open?id=1AIOAzjrNen0PJrd8N5IUf82AwuoFZn7h&usp=drive_copy', // INTERNET OF LTHINGS(BECE351E)
  'J': 'https://drive.google.com/open?id=1v6OrDz0oZ8wJWL-8VSl7n5-28aWzv24y&usp=drive_copy', // JAVA
  'BCSE209L': 'https://drive.google.com/open?id=183dC5RxuXOnQoNB2coMe-c22obsWQWQv&usp=drive_copy', // MACHINE LLEARNING(BCSE209L)
  'BCSE417L': 'https://drive.google.com/open?id=1DiNrbyal55twlU7eNyIYoQnM5CwxRFdr&usp=drive_copy', // Machine Vision(BCSE417L)
  'BHUM104L': 'https://drive.google.com/open?id=1LGTVoQj57Vi7SpOejRa7zjGbLN7oQ6Ob&usp=drive_copy', // Macro Economics(BHUM104L)
  'BMGT101': 'https://drive.google.com/open?id=1r5hEokHuBPlQ2mUL1GlyvUN9sqi_rcz-&usp=drive_copy', // Management and Principles of Leadership(BMGT101)
  'BCSE424L': 'https://drive.google.com/open?id=1cx5qf65KL_flOR9UJAcNe5rHAOIy6tK7&usp=drive_copy', // ML FOR ROBOTICS (BCSE424L)
  'BECE204P': 'https://drive.google.com/open?id=13EvVxdAl6b9IY09ySmHUIcjrFU3Z7Llk&usp=drive_copy', // MPMC LLAB(BECE204P)
  'BECE204L': 'https://drive.google.com/open?id=1m4QZETW2ZVrDKit3P3w8uSPN5ss78-4M&usp=drive_copy', // MPMC(BECE204L)
  'BCSE409L': 'https://drive.google.com/open?id=1N7UnRXYUHE1cZtnc-fUAGZRt-TG2vi6C&usp=drive_copy', // Natural Language Processing(BCSE409L)
  'OOPS': 'https://drive.google.com/open?id=1qT9833RTR7DMxjYxNRYCLbprTZ0zwbqD&usp=drive_copy', // OOPS
  'BCSE303P': 'https://drive.google.com/open?id=1owlTPxkWyPTYmy8lWG2jFn0EFjT7rWlX&usp=drive_copy', // OPERATING SYSTEMS LLAB(BCSE303P)
  'BCSE303L': 'https://drive.google.com/open?id=1PuXBbGVq62wKphN6XITEPWlRwG8BTjgC&usp=drive_copy', // OPERATING LSYSTEMS(BCSE303L)
  'BECE210L': 'https://drive.google.com/open?id=1NfFN6LU3T3ZClPZXDMI_varwzPvTHMlC&usp=drive_copy', // Optical Fiber Communication (BECE210L)
  'PRINCIPLES': 'https://drive.google.com/open?id=1-a1Z9ZF-cxh6Dwy83otqw-DKIfjg0tFi&usp=drive_copy', // Principles of Communication Sys...
  'BMAT202P': 'https://drive.google.com/open?id=1wL-7WQrGhKtY4uvNhBHK10d_cZJ6fLBV&usp=drive_copy', // PROBABILITY AND STATISTICS LLAB(BMAT202P)
  'BMAT202L': 'https://drive.google.com/open?id=1hp07v-Dr7x-K1xVTSFatko7xuACOnlOn&usp=drive_copy', // PROBABILITY AND LSTATISTICS(BMAT202L)
  'BECE207L': 'https://drive.google.com/open?id=1OsMLgutnUzpQhYLqV3CNr_nSmtFHOIOh&usp=drive_copy', // RANDOM LPROCESSES(BECE207L)
  'BCSE422L': 'https://drive.google.com/open?id=1Sslipm9XjYmWwXrcJYrl436b8GfNPQIS&usp=drive_copy', // Robot Modeling and Simulation(BCSE422L)
  'BCSE425L': 'https://drive.google.com/open?id=1z16tvlgN8syJtJJrNMPJEM58PO88AuTM&usp=drive_copy', // Robotic Perception(BCSE425L)
  'BCSE421L': 'https://drive.google.com/open?id=1JkAEkMYg4CTchkxsj2Ks5bstwloQyXmx&usp=drive_copy', // ROBOTICS : KINEMATICSBCSE421L
  'BECE312L': 'https://drive.google.com/open?id=1Ila4xdCFmfBjRXF2NpY7_634WWGnd5qU&usp=drive_copy', // Robotics and Automation, BECE312L
  'BECE409P': 'https://drive.google.com/open?id=19Jtf1J8ol4LlS_KH1K1dp-xdU1zsvznQ&usp=drive_copy', // SENSOR TECHNOLOGY LLAB(BECE409P)
  'BECE409E': 'https://drive.google.com/open?id=1sPRUQaPCYAnhf7w4zQvW-WlTRm6Rt2Fy&usp=drive_copy', // SENSOR LTECHNOLOGY(BECE409E)
  'BCSE420L': 'https://drive.google.com/open?id=19Jtf1J8ol4LlS_KH1K1dp-xdU1zsvznQ&usp=drive_copy', // SENSORS, ACTUATORS AND SIGNAL CONDITIONING (BCSE420L)
  'BCSE420P': 'https://drive.google.com/open?id=1sPRUQaPCYAnhf7w4zQvW-WlTRm6Rt2Fy&usp=drive_copy', // SENSORS, ACTUATORS AND SIGNAL CONDITIONING (BCSE420P)
  'BEE412L': 'https://drive.google.com/open?id=1uOKC4JDjMeh5A8GSVcpHAM2v2GGa7R3Y&usp=drive_copy', // Sensors and Actuators(BEE412L)
  'BECM301P': 'https://drive.google.com/open?id=12a-ldf7rB3QdKfkSbdFSDSmEhtXVgHkA&usp=drive_copy', // SIGNAL PROCESSING LLAB(BECM301P)
  'BECM301L': 'https://drive.google.com/drive/folders/1hMwEoz32o9HBNwu5qNwRiKND3ZnPeUCK', // SIGNAL LPROCESSING(BECM301L)
  'BECE202L': 'https://drive.google.com/open?id=1JrwSrY_RkJ9l4N6csDS3F-kvvd21HlzZ&usp=drive_copy', // SIGNALS AND LSYSTEMS(BECE202L)
  'BHUM109L': 'https://drive.google.com/open?id=15r5tv5bSUtjrnuDeWjGGq5Czq3_6dQxq&usp=drive_copy', // SIGNALS AND LSYSTEMS(BECE202L)
  'BCSE301P': 'https://drive.google.com/open?id=1LU3nv4b-ckKYfyA4sQ4f_EBb3ul0LHfT&usp=drive_copy', // SIGNALS AND LSYSTEMS(BECE202L)
  'BCSE301L': 'https://drive.google.com/open?id=1nsNCX96Y9DDFtb2bPcY5bIYhDTuF4sBg&usp=drive_copy', // SOCIAL WORK AND SUSTAINABILIY (BHUM109L)
  'BHUM107L': 'https://drive.google.com/open?id=1qUDrBaAs9_06XviC4O29zuHaN9F38lIa&usp=drive_copy', // SOFTWARE ENGINEERING LLAB(BCSE301P)
  'TECHNICALR': 'https://drive.google.com/open?id=1T7919v56fuU0e9-HFtfcIfGWI01AiTCi&usp=drive_copy', // SOFTWARE LENGINEERING(BCSE301L)
  'BCSE304L': 'https://drive.google.com/open?id=1uGXmbs9IC8d-Hui1JQs-4FPJ2Po6wdKx&usp=drive_copy', // Sustainability and Society(BHUM107L)
  'URBANCOMMU': 'https://drive.google.com/open?id=1-rBXVF2VBzZHg1NcKVHf1PscWpa7sa7d&usp=drive_copy', // TECHNICAL REPORT WRITING
  'BECE303L': 'https://drive.google.com/open?id=1AsHWwVVBiF-ggibDEDnsmnVf_Xn7ie8j&usp=drive_copy', // THEORY OF LCOMPUTATION(BCSE304L)
  'BCLE215L': 'https://drive.google.com/open?id=1KeLK0Tpvf6NlWil7IF2Nw4TK5_CGkYTs&usp=drive_copy', // URBAN COMMUNITY DEVELOPMENT
  'BCLE216L': 'https://drive.google.com/open?id=1c-zWeZbhQZQTf4wrXPUWkeBlhfkM6Szl&usp=drive_copy', // VLSI SYSTEM DESIGN (BECE303L)
  'BCSE315L': 'https://drive.google.com/open?id=12jpcdOtpgr0butSMP1C1dHES-KNYoi6z&usp=drive_copy', // WASTE LMANAGEMENT(BCLE215L)
  'BCSE203E': 'https://drive.google.com/open?id=1AbK5Hki-qrF7_B8r5WC9xumx7Ip0nkNY&usp=drive_copy', // WATER RESOURCE LMANAGEMENT(BCLE216L)
  'BECE317L': 'https://drive.google.com/open?id=12zrvxV_Zo5L96S0hXz4lQ6BgaXvJu1aG&usp=drive_copy', // WEARABLE LCOMPUTING(BCSE315L)
};


const subjectFolderNames = {
  'BCHY101L' : 'BCHY101L',
  'BSTS301P': 'Advanced Competitive Coding(BSTS301P)',
  'BECE206P': 'ANALOG CIRCUITS LAB(BECE206P)',
  'BECE206L': 'ANALOG CIRCUITS(BECE206L)',
  'BECE304P': 'ANALOG COMMUNICATIONS LAB(BECE304P)',
  'BECE304L': 'ANALOG COMMUNICATIONS(BECE304L)',
  'BECE305L': 'ANTENNA & MICROWAVE ENGINEERING (BECE305L)',
  'BECE305P': 'ANTENNA & MICROWAVE ENGINEERING (BECE305P)',
  'BCSE306L': 'ARTIFICIAL INTELLIGENCE( BCSE306L)',
  'BCSE428L': 'Autonomous Drones(BCSE428L)',
  'BECE355L': 'AWS FOR CLOUD COMPUTING(BECE355L)',
  'BCSE355L': 'AWS Solutions Architect (BCSE 355L)',
  'BCSE427L': 'Cognitive Robotics(BCSE427L)',
  'BCSE307P': 'COMPILER DESIGN LAB (BCSE307P)',
  'BCSE307L': 'COMPILER DESIGN( BCSE307L)',
  'BMAT201L': 'COMPLEX VARIABLES AND LINEAR ALGEBRA(BMAT201L)',
  'BCSE205L': 'COMPUTER ARCHITECTURE AND ORGANIZATION(BCSE205L)',
  'BECE401L': 'Computer Communications and Networks(BECE401L)',
  'BCSE308P': 'COMPUTER NETWORKS LAB(BCSE308P)',
  'BCSE308L': 'COMPUTER NETWORKS(BCSE308L)',
  'BECE302L': 'CONTROL SYSTEMS(BECE302L)',
  'BCSE309L': 'Cryptography and Network Security(BCSE309L)',
  'BECE411L': 'Cryptography and Network Security(BECE411L)',
  'BCSE302L': 'DATABASE SYSTEMS(BCSE302L)',
  'BCSE302P': 'DATABASE SYSTEMS(BCSE302P)',
  'BCSE332L': 'DEEP LEARNING (BCSE332L)',
  'BCSE204L': 'DESIGN AND ANALYSIS OF ALGORITHMS(BCSE204L)',
  'BCSE204P': 'DESIGN AND ANALYSIS OF ALGORITHMS(BCSE204P)',
  'BCSE316L': 'DESIGN OF SMART CITIES(BCSE316L)',
  'BECE306L': 'DIGITAL COMMUNICATION SYSTEMS (BECE306L)',
  'BECE306P': 'DIGITAL COMMUNICATION SYSTEMS (BECE306P)',
  'BCSE403L': 'DIGITAL IMAGE PROCESSING(BCSE403L)',
  'BMAT205L': 'DISCRETE MATHS AND GRAPH THEORY(BMAT205L)',
  'BCSE202P': 'DSA LAB(BCSE202P)',
  'BCSE202L': 'DSA(BCSE202L)',
  'BECE102P': 'DSD LAB(BECE102P)',
  'BECE301P': 'DSP LAB(BECE301P)',
  'BECE301L': 'DSP(BECE301L)',
  'BECE320E': 'Embedded C Programming(BECE320E)',
  'BECE403E': 'Embedded Systems Design(BECE403E)',
  'BCSE305L': 'Embedded Systems(BCSE305L)',
  'BECE205L': 'EMT(BECE205L)',
  'BCSE418L': 'Explainable AI(BCSE418L)',
  'BCSE324L': 'Foundations of Blockchain Technology(BCSE324L)',
  'BCSE206L': 'Foundations of Data Science(BCSE206L)',
  'BECE406E': 'FPGA BASED SYSTEM DESIGN(BECE406E)',
  'BCSE313L': 'FUNDAMENTALS OF FOG EDGE AND COMPUTING (BCSE313L)',
  'BCSE416L': 'Game Programming(BCSE416L)',
  'BCLE214L': 'GLOBAL WARMING (BCLE214L)',
  'BCSE414L': 'High Performance Computing(BCSE414L)',
  'BCSE415L': 'HUMAN COMPUTER INTERACTION(BCSE415L)',
  'BCSE404L': 'Internet and Web Programming (BCSE404L)',
  'BCSE401L': 'Internet of Things(BCSE401L)',
  'BECE351E': 'INTERNET OF THINGS(BECE351E)',
  'BCSE209L': 'MACHINE LEARNING(BCSE209L)',
  'BCSE417L': 'Machine Vision(BCSE417L)',
  'BHUM104L': 'Macro Economics(BHUM104L)',
  'BMGT101': 'Management and Principles of Leadership(BMGT101)',
  'BCSE424L': 'ML FOR ROBOTICS (BCSE424L)',
  'BECE204P': 'MPMC LAB(BECE204P)',
  'BECE204L': 'MPMC(BECE204L)',
  'BCSE409L': 'Natural Language Processing(BCSE409L)',
  'BCSE303P': 'OPERATING SYSTEMS LAB(BCSE303P)',
  'BCSE303L': 'OPERATING SYSTEMS(BCSE303L)',
  'BECE210L': 'Optical Fiber Communication (BECE210L)',
  'BMAT202P': 'PROBABILITY AND STATISTICS LAB(BMAT202P)',
  'BMAT202L': 'PROBABILITY AND STATISTICS(BMAT202L)',
  'BECE207L': 'RANDOM PROCESSES(BECE207L)',
  'BCSE422L': 'Robot Modeling and Simulation(BCSE422L)',
  'BCSE425L': 'Robotic Perception(BCSE425L)',
  'BECE312L': 'Robotics and automation(BECE312L)',
  'BECE409P': 'SENSOR TECHNOLOGY LAB(BECE409P)',
  'BECE409E': 'SENSOR TECHNOLOGY(BECE409E)',
  'BCSE420L': 'SENSORS, ACTUATORS AND SIGNAL CONDITIONING (BCSE420L)',
  'BCSE420P': 'SENSORS, ACTUATORS AND SIGNAL CONDITIONING (BCSE420P)',
  'BEE412L': 'Sensors and Actuators(BEE412L)',
  'BECM301P': 'SIGNAL PROCESSING LAB(BECM301P)',
  'BECM301L': 'SIGNAL PROCESSING(BECM301L)',
  'BECE202L': 'SIGNALS AND SYSTEMS(BECE202L)',
  'BHUM109L': 'SOCIAL WORK AND SUSTAINABILIY (BHUM109L)',
  'BCSE301P': 'SOFTWARE ENGINEERING LAB(BCSE301P)',
  'BCSE301L': 'SOFTWARE ENGINEERING(BCSE301L)',
  'BHUM107L': 'Sustainability and Society(BHUM107L)',
  'BCSE304L': 'THEORY OF COMPUTATION(BCSE304L)',
  'BECE303L': 'VLSI SYSTEM DESIGN (BECE303L)',
  'BCLE215L': 'WASTE MANAGEMENT(BCLE215L)',
  'BCLE216L': 'WATER RESOURCE MANAGEMENT(BCLE216L)',
  'BCSE315L': 'WEARABLE COMPUTING(BCSE315L)',
  'BCSE203E': 'WEB PROGRAMMING(BCSE203E)',
  'BECE317L': 'Wireless and Mobile Communications(BECE317L)'
};

// Function to handle subject button clicks
function handleSubjectClick(event) {
  event.preventDefault();
  const button = event.currentTarget;
  let subjectText = button.textContent.trim();
  
  // Debug: Log the button text
  console.log('Button text:', subjectText);
  
  // Extract the subject code (could be in format 'BCHY101L' or 'Subject Name (BCHY101L)')
  let subjectCode = '';
  const codeMatch = subjectText.match(/\(?([A-Z0-9]{4,8}[A-Z]?[0-9]?[A-Z]?[0-9]?[A-Z]?[0-9]?)\)?/);
  
  if (codeMatch) {
    subjectCode = codeMatch[1] || codeMatch[0];
  } else {
    // If no code found, use the whole text (for simple codes like 'BCHY101L')
    subjectCode = subjectText;
  }
  
  // Clean up the code (remove any non-alphanumeric characters)
  subjectCode = subjectCode.replace(/[^A-Z0-9]/g, '');
  
  console.log('Extracted code:', subjectCode);
  console.log('Available codes:', Object.keys(subjectLinks));
  console.log('Looking for code:', subjectCode);
  console.log('Direct match exists:', subjectCode in subjectLinks);
  
  // Try to find the link
  let driveLink = subjectLinks[subjectCode];
  
  if (!driveLink) {
    // If no direct match, try case-insensitive search
    const foundCode = Object.keys(subjectLinks).find(code => 
      code.toLowerCase() === subjectCode.toLowerCase()
    );
    if (foundCode) {
      driveLink = subjectLinks[foundCode];
      console.log('Found case-insensitive match:', foundCode);
    }
  }
  
  console.log('Final drive link:', driveLink);
  
  if (driveLink) {
    console.log('Opening link for', subjectCode, ':', driveLink);
    
    // Check if this is a placeholder link
    if (driveLink.includes('placeholder_link_')) {
      alert(`This subject link is not yet configured. Please contact the administrator to add the Google Drive link for ${subjectCode}.`);
      return;
    }
    
    window.open(driveLink, '_blank');
  } else {
    console.warn('No link found for code:', subjectCode);
    alert(`No Google Drive link found for ${subjectCode}.`);
  }
}

// Function to filter subjects based on search input
function filterSubjects(searchTerm) {
  const tiles = document.querySelectorAll('.tile');
  if (!searchTerm.trim()) {
    // If search is empty, show all tiles
    tiles.forEach(tile => {
      tile.style.display = 'flex';
    });
    return;
  }

  const searchTermLower = searchTerm.toLowerCase();
  
  tiles.forEach(tile => {
    const button = tile.querySelector('.button');
    if (!button) return;
    
    const subjectText = button.textContent.trim().toLowerCase();
    
    if (subjectText.includes(searchTermLower)) {
      tile.style.display = 'flex';
    } else {
      tile.style.display = 'none';
    }
  });
}

// Function to initialize all event listeners
function initializeEventListeners() {
  // Handle subject button clicks for both button classes
  const buttons = document.querySelectorAll('.button, .cssbuttons-io-button');
  buttons.forEach(button => {
    // Remove any existing click listeners to prevent duplicates
    button.removeEventListener('click', handleSubjectClick);
    button.addEventListener('click', handleSubjectClick);
  });
  
  // Handle search functionality if search input exists
  const searchInput = document.getElementById('subjectSearch');
  if (searchInput) {
    searchInput.removeEventListener('input', handleSearch);
    searchInput.addEventListener('input', handleSearch);
  }
}

// Handle search input
function handleSearch(e) {
  filterSubjects(e.target.value);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeEventListeners();
  
  // Test function to debug BECE304L issue
  console.log('=== DEBUGGING BECE304L ===');
  console.log('BECE304L in subjectLinks:', 'BECE304L' in subjectLinks);
  console.log('BECE304L link:', subjectLinks['BECE304L']);
  console.log('All keys containing BECE304L:', Object.keys(subjectLinks).filter(key => key.includes('BECE304L')));
  
  // Test the regex extraction
  const testText = 'ANALOG COMMUNICATIONS(BECE304L)';
  const codeMatch = testText.match(/\(?([A-Z0-9]{4,8}[A-Z]?[0-9]?[A-Z]?[0-9]?[A-Z]?[0-9]?)\)?/);
  console.log('Test text:', testText);
  console.log('Regex match:', codeMatch);
  if (codeMatch) {
    const extractedCode = codeMatch[1] || codeMatch[0];
    const cleanCode = extractedCode.replace(/[^A-Z0-9]/g, '');
    console.log('Extracted code:', extractedCode);
    console.log('Clean code:', cleanCode);
    console.log('Clean code in subjectLinks:', cleanCode in subjectLinks);
  }
});

// Also re-initialize if new content is loaded dynamically
document.addEventListener('DOMNodeInserted', function() {
  initializeEventListeners();
});
