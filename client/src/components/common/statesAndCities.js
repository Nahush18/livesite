const statesAndCities = [
  { value: "Andaman and Nicobar Islands", label: "Andaman and Nicobar Islands" },
  { value: "Port Blair, Andaman and Nicobar Islands", label: "Port Blair, Andaman and Nicobar Islands" },

  { value: "Andhra Pradesh", label: "Andhra Pradesh" },
  { value: "Adoni, Andhra Pradesh", label: "Adoni, Andhra Pradesh" },
  { value: "Amaravati, Andhra Pradesh", label: "Amaravati, Andhra Pradesh" },
  { value: "Anantapur, Andhra Pradesh", label: "Anantapur, Andhra Pradesh" },
  { value: "Chandragiri, Andhra Pradesh", label: "Chandragiri, Andhra Pradesh" },
  { value: "Chittoor, Andhra Pradesh", label: "Chittoor, Andhra Pradesh" },
  { value: "Dowlaiswaram, Andhra Pradesh", label: "Dowlaiswaram, Andhra Pradesh" },
  { value: "Eluru, Andhra Pradesh", label: "Eluru, Andhra Pradesh" },
  { value: "Guntur, Andhra Pradesh", label: "Guntur, Andhra Pradesh" },
  { value: "Kadapa, Andhra Pradesh", label: "Kadapa, Andhra Pradesh" },
  { value: "Kakinada, Andhra Pradesh", label: "Kakinada, Andhra Pradesh" },
  { value: "Kurnool, Andhra Pradesh", label: "Kurnool, Andhra Pradesh" },
  { value: "Machilipatnam, Andhra Pradesh", label: "Machilipatnam, Andhra Pradesh" },
  { value: "Nagarjunakoṇḍa, Andhra Pradesh", label: "Nagarjunakoṇḍa, Andhra Pradesh" },
  { value: "Rajahmundry, Andhra Pradesh", label: "Rajahmundry, Andhra Pradesh" },
  { value: "Srikakulam, Andhra Pradesh", label: "Srikakulam, Andhra Pradesh" },
  { value: "Tirupati, Andhra Pradesh", label: "Tirupati, Andhra Pradesh" },
  { value: "Vijayawada, Andhra Pradesh", label: "Vijayawada, Andhra Pradesh" },
  { value: "Visakhapatnam, Andhra Pradesh", label: "Visakhapatnam, Andhra Pradesh" },
  { value: "Vizianagaram, Andhra Pradesh", label: "Vizianagaram, Andhra Pradesh" },
  { value: "Yemmiganur, Andhra Pradesh", label: "Yemmiganur, Andhra Pradesh" },

  { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
  { value: "Itanagar, Arunachal Pradesh", label: "Itanagar, Arunachal Pradesh" },

  { value: "Assam", label: "Assam" },
  { value: "Dhuburi, Assam", label: "Dhuburi, Assam" },
  { value: "Dibrugarh, Assam", label: "Dibrugarh, Assam" },
  { value: "Dispur, Assam", label: "Dispur, Assam" },
  { value: "Guwahati, Assam", label: "Guwahati, Assam" },
  { value: "Jorhat, Assam", label: "Jorhat, Assam" },
  { value: "Nagaon, Assam", label: "Nagaon, Assam" },
  { value: "Sivasagar, Assam", label: "Sivasagar, Assam" },
  { value: "Silchar, Assam", label: "Silchar, Assam" },
  { value: "Tezpur, Assam", label: "Tezpur, Assam" },
  { value: "Tinsukia, Assam", label: "Tinsukia, Assam" },

  { value: "Bihar", label: "Bihar" },
  { value: "Ara, Bihar", label: "Ara, Bihar" },
  { value: "Barauni, Bihar", label: "Barauni, Bihar" },
  { value: "Begusarai, Bihar", label: "Begusarai, Bihar" },
  { value: "Bettiah, Bihar", label: "Bettiah, Bihar" },
  { value: "Bhagalpur, Bihar", label: "Bhagalpur, Bihar" },
  { value: "Bihar Sharif, Bihar", label: "Bihar Sharif, Bihar" },
  { value: "Bodh Gaya, Bihar", label: "Bodh Gaya, Bihar" },
  { value: "Buxar, Bihar", label: "Buxar, Bihar" },
  { value: "Chapra, Bihar", label: "Chapra, Bihar" },
  { value: "Darbhanga, Bihar", label: "Darbhanga, Bihar" },
  { value: "Dehri, Bihar", label: "Dehri, Bihar" },
  { value: "Dinapur Nizamat, Bihar", label: "Dinapur Nizamat, Bihar" },
  { value: "Gaya, Bihar", label: "Gaya, Bihar" },
  { value: "Hajipur, Bihar", label: "Hajipur, Bihar" },
  { value: "Jamalpur, Bihar", label: "Jamalpur, Bihar" },
  { value: "Katihar, Bihar", label: "Katihar, Bihar" },
  { value: "Madhubani, Bihar", label: "Madhubani, Bihar" },
  { value: "Motihari, Bihar", label: "Motihari, Bihar" },
  { value: "Munger, Bihar", label: "Munger, Bihar" },
  { value: "Muzaffarpur, Bihar", label: "Muzaffarpur, Bihar" },
  { value: "Patna, Bihar", label: "Patna, Bihar" },
  { value: "Purnia, Bihar", label: "Purnia, Bihar" },
  { value: "Pusa, Bihar", label: "Pusa, Bihar" },
  { value: "Saharsa, Bihar", label: "Saharsa, Bihar" },
  { value: "Samastipur, Bihar", label: "Samastipur, Bihar" },
  { value: "Sasaram, Bihar", label: "Sasaram, Bihar" },
  { value: "Sitamarhi, Bihar", label: "Sitamarhi, Bihar" },
  { value: "Siwan, Bihar", label: "Siwan, Bihar" },

  { value: "Chandigarh", label: "Chandigarh" },
  
  { value: "Chhattisgarh", label: "Chhattisgarh" },
  { value: "Ambikapur, Chhattisgarh", label: "Ambikapur, Chhattisgarh" },
  { value: "Bhilai, Chhattisgarh", label: "Bhilai, Chhattisgarh" },
  { value: "Bilaspur, Chhattisgarh", label: "Bilaspur, Chhattisgarh" },
  { value: "Dhamtari, Chhattisgarh", label: "Dhamtari, Chhattisgarh" },
  { value: "Durg, Chhattisgarh", label: "Durg, Chhattisgarh" },
  { value: "Jagdalpur, Chhattisgarh", label: "Jagdalpur, Chhattisgarh" },
  { value: "Raipur, Chhattisgarh", label: "Raipur, Chhattisgarh" },
  { value: "Rajnandgaon, Chhattisgarh", label: "Rajnandgaon, Chhattisgarh" },

  { value: "Dadra and Nagar Haveli and Daman and Diu", label: "Dadra and Nagar Haveli and Daman and Diu" },
  { value: "Daman, Dadra and Nagar Haveli and Daman and Diu", label: "Daman, Dadra and Nagar Haveli and Daman and Diu" },
  { value: "Diu, Dadra and Nagar Haveli and Daman and Diu", label: "Diu, Dadra and Nagar Haveli and Daman and Diu" },
  { value: "Silvassa, Dadra and Nagar Haveli and Daman and Diu", label: "Silvassa, Dadra and Nagar Haveli and Daman and Diu" },

  { value: "Delhi", label: "Delhi" },
  { value: "New Delhi, Delhi", label: "New Delhi, Delhi" },

  { value: "Goa", label: "Goa" },
  { value: "Madgaon, Goa", label: "Madgaon, Goa" },
  { value: "Panaji, Goa", label: "Panaji, Goa" },

  { value: "Gujarat", label: "Gujarat" },
  { value: "Ahmadabad, Gujarat", label: "Ahmadabad, Gujarat" },
  { value: "Amreli, Gujarat", label: "Amreli, Gujarat" },
  { value: "Bharuch, Gujarat", label: "Bharuch, Gujarat" },
  { value: "Bhavnagar, Gujarat", label: "Bhavnagar, Gujarat" },
  { value: "Bhuj, Gujarat", label: "Bhuj, Gujarat" },
  { value: "Dwarka, Gujarat", label: "Dwarka, Gujarat" },
  { value: "Gandhinagar, Gujarat", label: "Gandhinagar, Gujarat" },
  { value: "Godhra, Gujarat", label: "Godhra, Gujarat" },
  { value: "Jamnagar, Gujarat", label: "Jamnagar, Gujarat" },
  { value: "Junagadh, Gujarat", label: "Junagadh, Gujarat" },
  { value: "Kandla, Gujarat", label: "Kandla, Gujarat" },
  { value: "Khambhat, Gujarat", label: "Khambhat, Gujarat" },
  { value: "Kheda, Gujarat", label: "Kheda, Gujarat" },
  { value: "Mahesana, Gujarat", label: "Mahesana, Gujarat" },
  { value: "Morbi, Gujarat", label: "Morbi, Gujarat" },
  { value: "Nadiad, Gujarat", label: "Nadiad, Gujarat" },
  { value: "Navsari, Gujarat", label: "Navsari, Gujarat" },
  { value: "Okha, Gujarat", label: "Okha, Gujarat" },
  { value: "Palanpur, Gujarat", label: "Palanpur, Gujarat" },
  { value: "Patan, Gujarat", label: "Patan, Gujarat" },
  { value: "Porbandar, Gujarat", label: "Porbandar, Gujarat" },
  { value: "Rajkot, Gujarat", label: "Rajkot, Gujarat" },
  { value: "Surat, Gujarat", label: "Surat, Gujarat" },
  { value: "Surendranagar, Gujarat", label: "Surendranagar, Gujarat" },
  { value: "Valsad, Gujarat", label: "Valsad, Gujarat" },
  { value: "Veraval, Gujarat", label: "Veraval, Gujarat" },
  { value: "Haryana", label: "Haryana" },
  { value: "Ambala, Haryana", label: "Ambala, Haryana" },
  { value: "Bhiwani, Haryana", label: "Bhiwani, Haryana" },
  { value: "Chandigarh, Haryana", label: "Chandigarh, Haryana" },
  { value: "Faridabad, Haryana", label: "Faridabad, Haryana" },
  { value: "Firozpur Jhirka, Haryana", label: "Firozpur Jhirka, Haryana" },
  { value: "Gurugram, Haryana", label: "Gurugram, Haryana" },
  { value: "Hansi, Haryana", label: "Hansi, Haryana" },
  { value: "Hisar, Haryana", label: "Hisar, Haryana" },
  { value: "Jind, Haryana", label: "Jind, Haryana" },
  { value: "Kaithal, Haryana", label: "Kaithal, Haryana" },
  { value: "Karnal, Haryana", label: "Karnal, Haryana" },
  { value: "Kurukshetra, Haryana", label: "Kurukshetra, Haryana" },
  { value: "Panipat, Haryana", label: "Panipat, Haryana" },
  { value: "Pehowa, Haryana", label: "Pehowa, Haryana" },
  { value: "Rewari, Haryana", label: "Rewari, Haryana" },
  { value: "Rohtak, Haryana", label: "Rohtak, Haryana" },
  { value: "Sirsa, Haryana", label: "Sirsa, Haryana" },
  { value: "Sonipat, Haryana", label: "Sonipat, Haryana" },

  // Himachal Pradesh
  { value: "Himachal Pradesh", label: "Himachal Pradesh" },
  { value: "Bilaspur, Himachal Pradesh", label: "Bilaspur, Himachal Pradesh" },
  { value: "Chamba, Himachal Pradesh", label: "Chamba, Himachal Pradesh" },
  { value: "Dalhousie, Himachal Pradesh", label: "Dalhousie, Himachal Pradesh" },
  { value: "Dharmshala, Himachal Pradesh", label: "Dharmshala, Himachal Pradesh" },
  { value: "Hamirpur, Himachal Pradesh", label: "Hamirpur, Himachal Pradesh" },
  { value: "Kangra, Himachal Pradesh", label: "Kangra, Himachal Pradesh" },
  { value: "Kullu, Himachal Pradesh", label: "Kullu, Himachal Pradesh" },
  { value: "Mandi, Himachal Pradesh", label: "Mandi, Himachal Pradesh" },
  { value: "Nahan, Himachal Pradesh", label: "Nahan, Himachal Pradesh" },
  { value: "Shimla, Himachal Pradesh", label: "Shimla, Himachal Pradesh" },
  { value: "Una, Himachal Pradesh", label: "Una, Himachal Pradesh" },

  // Jammu and Kashmir (Union Territory)
  { value: "Jammu and Kashmir", label: "Jammu and Kashmir" },
  { value: "Anantnag, Jammu and Kashmir", label: "Anantnag, Jammu and Kashmir" },
  { value: "Baramula, Jammu and Kashmir", label: "Baramula, Jammu and Kashmir" },
  { value: "Doda, Jammu and Kashmir", label: "Doda, Jammu and Kashmir" },
  { value: "Gulmarg, Jammu and Kashmir", label: "Gulmarg, Jammu and Kashmir" },
  { value: "Jammu, Jammu and Kashmir", label: "Jammu, Jammu and Kashmir" },
  { value: "Kathua, Jammu and Kashmir", label: "Kathua, Jammu and Kashmir" },
  { value: "Punch, Jammu and Kashmir", label: "Punch, Jammu and Kashmir" },
  { value: "Rajouri, Jammu and Kashmir", label: "Rajouri, Jammu and Kashmir" },
  { value: "Srinagar, Jammu and Kashmir", label: "Srinagar, Jammu and Kashmir" },
  { value: "Udhampur, Jammu and Kashmir", label: "Udhampur, Jammu and Kashmir" },

  // Jharkhand
  { value: "Jharkhand", label: "Jharkhand" },
  { value: "Bokaro, Jharkhand", label: "Bokaro, Jharkhand" },
  { value: "Chaibasa, Jharkhand", label: "Chaibasa, Jharkhand" },
  { value: "Deoghar, Jharkhand", label: "Deoghar, Jharkhand" },
  { value: "Dhanbad, Jharkhand", label: "Dhanbad, Jharkhand" },
  { value: "Dumka, Jharkhand", label: "Dumka, Jharkhand" },
  { value: "Giridih, Jharkhand", label: "Giridih, Jharkhand" },
  { value: "Hazaribag, Jharkhand", label: "Hazaribag, Jharkhand" },
  { value: "Jamshedpur, Jharkhand", label: "Jamshedpur, Jharkhand" },
  { value: "Jharia, Jharkhand", label: "Jharia, Jharkhand" },
  { value: "Rajmahal, Jharkhand", label: "Rajmahal, Jharkhand" },
  { value: "Ranchi, Jharkhand", label: "Ranchi, Jharkhand" },
  { value: "Saraikela, Jharkhand", label: "Saraikela, Jharkhand" },

  // Karnataka
  { value: "Karnataka", label: "Karnataka" },
  { value: "Badami, Karnataka", label: "Badami, Karnataka" },
  { value: "Ballari, Karnataka", label: "Ballari, Karnataka" },
  { value: "Bengaluru, Karnataka", label: "Bengaluru, Karnataka" },
  { value: "Belagavi, Karnataka", label: "Belagavi, Karnataka" },
  { value: "Bhadravati, Karnataka", label: "Bhadravati, Karnataka" },
  { value: "Bidar, Karnataka", label: "Bidar, Karnataka" },
  { value: "Chikkamagaluru, Karnataka", label: "Chikkamagaluru, Karnataka" },
  { value: "Chitradurga, Karnataka", label: "Chitradurga, Karnataka" },
  { value: "Davangere, Karnataka", label: "Davangere, Karnataka" },
  { value: "Halebid, Karnataka", label: "Halebid, Karnataka" },
  { value: "Hassan, Karnataka", label: "Hassan, Karnataka" },
  { value: "Hubballi-Dharwad, Karnataka", label: "Hubballi-Dharwad, Karnataka" },
  { value: "Kalaburagi, Karnataka", label: "Kalaburagi, Karnataka" },
  { value: "Kolar, Karnataka", label: "Kolar, Karnataka" },
  { value: "Madikeri, Karnataka", label: "Madikeri, Karnataka" },
  { value: "Mandya, Karnataka", label: "Mandya, Karnataka" },
  { value: "Mangaluru, Karnataka", label: "Mangaluru, Karnataka" },
  { value: "Mysuru, Karnataka", label: "Mysuru, Karnataka" },
  { value: "Raichur, Karnataka", label: "Raichur, Karnataka" },
  { value: "Shivamogga, Karnataka", label: "Shivamogga, Karnataka" },
  { value: "Shravanabelagola, Karnataka", label: "Shravanabelagola, Karnataka" },
  { value: "Shrirangapattana, Karnataka", label: "Shrirangapattana, Karnataka" },
  { value: "Tumakuru, Karnataka", label: "Tumakuru, Karnataka" },
  { value: "Vijayapura, Karnataka", label: "Vijayapura, Karnataka" },

  // Kerala
  { value: "Kerala", label: "Kerala" },
  { value: "Alappuzha, Kerala", label: "Alappuzha, Kerala" },
  { value: "Vatakara, Kerala", label: "Vatakara, Kerala" },
  { value: "Idukki, Kerala", label: "Idukki, Kerala" },
  { value: "Kannur, Kerala", label: "Kannur, Kerala" },
  { value: "Kochi, Kerala", label: "Kochi, Kerala" },
  { value: "Kollam, Kerala", label: "Kollam, Kerala" },
  { value: "Kottayam, Kerala", label: "Kottayam, Kerala" },
  { value: "Kozhikode, Kerala", label: "Kozhikode, Kerala" },
  { value: "Mattancheri, Kerala", label: "Mattancheri, Kerala" },
  { value: "Palakkad, Kerala", label: "Palakkad, Kerala" },
  { value: "Thalassery, Kerala", label: "Thalassery, Kerala" },
  { value: "Thiruvananthapuram, Kerala", label: "Thiruvananthapuram, Kerala" },
  { value: "Thrissur, Kerala", label: "Thrissur, Kerala" },
  { value: "Ladakh", label: "Ladakh" },
  { value: "Kargil, Ladakh", label: "Kargil, Ladakh" },
  { value: "Leh, Ladakh", label: "Leh, Ladakh" },

  // Madhya Pradesh
  { value: "Madhya Pradesh", label: "Madhya Pradesh" },
  { value: "Balaghat, Madhya Pradesh", label: "Balaghat, Madhya Pradesh" },
  { value: "Barwani, Madhya Pradesh", label: "Barwani, Madhya Pradesh" },
  { value: "Betul, Madhya Pradesh", label: "Betul, Madhya Pradesh" },
  { value: "Bharhut, Madhya Pradesh", label: "Bharhut, Madhya Pradesh" },
  { value: "Bhind, Madhya Pradesh", label: "Bhind, Madhya Pradesh" },
  { value: "Bhojpur, Madhya Pradesh", label: "Bhojpur, Madhya Pradesh" },
  { value: "Bhopal, Madhya Pradesh", label: "Bhopal, Madhya Pradesh" },
  { value: "Burhanpur, Madhya Pradesh", label: "Burhanpur, Madhya Pradesh" },
  { value: "Chhatarpur, Madhya Pradesh", label: "Chhatarpur, Madhya Pradesh" },
  { value: "Chhindwara, Madhya Pradesh", label: "Chhindwara, Madhya Pradesh" },
  { value: "Damoh, Madhya Pradesh", label: "Damoh, Madhya Pradesh" },
  { value: "Datia, Madhya Pradesh", label: "Datia, Madhya Pradesh" },
  { value: "Dewas, Madhya Pradesh", label: "Dewas, Madhya Pradesh" },
  { value: "Dhar, Madhya Pradesh", label: "Dhar, Madhya Pradesh" },
  { value: "Dr. Ambedkar Nagar (Mhow), Madhya Pradesh", label: "Dr. Ambedkar Nagar (Mhow), Madhya Pradesh" },
  { value: "Guna, Madhya Pradesh", label: "Guna, Madhya Pradesh" },
  { value: "Gwalior, Madhya Pradesh", label: "Gwalior, Madhya Pradesh" },
  { value: "Hoshangabad, Madhya Pradesh", label: "Hoshangabad, Madhya Pradesh" },
  { value: "Indore, Madhya Pradesh", label: "Indore, Madhya Pradesh" },
  { value: "Itarsi, Madhya Pradesh", label: "Itarsi, Madhya Pradesh" },
  { value: "Jabalpur, Madhya Pradesh", label: "Jabalpur, Madhya Pradesh" },
  { value: "Jhabua, Madhya Pradesh", label: "Jhabua, Madhya Pradesh" },
  { value: "Khajuraho, Madhya Pradesh", label: "Khajuraho, Madhya Pradesh" },
  { value: "Khandwa, Madhya Pradesh", label: "Khandwa, Madhya Pradesh" },
  { value: "Khargone, Madhya Pradesh", label: "Khargone, Madhya Pradesh" },
  { value: "Maheshwar, Madhya Pradesh", label: "Maheshwar, Madhya Pradesh" },
  { value: "Mandla, Madhya Pradesh", label: "Mandla, Madhya Pradesh" },
  { value: "Mandsaur, Madhya Pradesh", label: "Mandsaur, Madhya Pradesh" },
  { value: "Morena, Madhya Pradesh", label: "Morena, Madhya Pradesh" },
  { value: "Murwara, Madhya Pradesh", label: "Murwara, Madhya Pradesh" },
  { value: "Narsimhapur, Madhya Pradesh", label: "Narsimhapur, Madhya Pradesh" },
  { value: "Narsinghgarh, Madhya Pradesh", label: "Narsinghgarh, Madhya Pradesh" },
  { value: "Narwar, Madhya Pradesh", label: "Narwar, Madhya Pradesh" },
  { value: "Neemuch, Madhya Pradesh", label: "Neemuch, Madhya Pradesh" },
  { value: "Nowgong, Madhya Pradesh", label: "Nowgong, Madhya Pradesh" },
  { value: "Orchha, Madhya Pradesh", label: "Orchha, Madhya Pradesh" },
  { value: "Panna, Madhya Pradesh", label: "Panna, Madhya Pradesh" },
  { value: "Raisen, Madhya Pradesh", label: "Raisen, Madhya Pradesh" },
  { value: "Rajgarh, Madhya Pradesh", label: "Rajgarh, Madhya Pradesh" },
  { value: "Ratlam, Madhya Pradesh", label: "Ratlam, Madhya Pradesh" },
  { value: "Rewa, Madhya Pradesh", label: "Rewa, Madhya Pradesh" },
  { value: "Sagar, Madhya Pradesh", label: "Sagar, Madhya Pradesh" },
  { value: "Sarangpur, Madhya Pradesh", label: "Sarangpur, Madhya Pradesh" },
  { value: "Satna, Madhya Pradesh", label: "Satna, Madhya Pradesh" },
  { value: "Sehore, Madhya Pradesh", label: "Sehore, Madhya Pradesh" },
  { value: "Seoni, Madhya Pradesh", label: "Seoni, Madhya Pradesh" },
  { value: "Shahdol, Madhya Pradesh", label: "Shahdol, Madhya Pradesh" },
  { value: "Shajapur, Madhya Pradesh", label: "Shajapur, Madhya Pradesh" },
  { value: "Sheopur, Madhya Pradesh", label: "Sheopur, Madhya Pradesh" },
  { value: "Shivpuri, Madhya Pradesh", label: "Shivpuri, Madhya Pradesh" },
  { value: "Ujjain, Madhya Pradesh", label: "Ujjain, Madhya Pradesh" },
  { value: "Vidisha, Madhya Pradesh", label: "Vidisha, Madhya Pradesh" },

  // Maharashtra
  { value: "Maharashtra", label: "Maharashtra" },
  { value: "Ahmadnagar, Maharashtra", label: "Ahmadnagar, Maharashtra" },
  { value: "Akola, Maharashtra", label: "Akola, Maharashtra" },
  { value: "Amravati, Maharashtra", label: "Amravati, Maharashtra" },
  { value: "Aurangabad, Maharashtra", label: "Aurangabad, Maharashtra" },
  { value: "Bhandara, Maharashtra", label: "Bhandara, Maharashtra" },
  { value: "Bhusawal, Maharashtra", label: "Bhusawal, Maharashtra" },
  { value: "Bid, Maharashtra", label: "Bid, Maharashtra" },
  { value: "Buldhana, Maharashtra", label: "Buldhana, Maharashtra" },
  { value: "Chandrapur, Maharashtra", label: "Chandrapur, Maharashtra" },
  { value: "Daulatabad, Maharashtra", label: "Daulatabad, Maharashtra" },
  { value: "Dhule, Maharashtra", label: "Dhule, Maharashtra" },
  { value: "Jalgaon, Maharashtra", label: "Jalgaon, Maharashtra" },
  { value: "Kalyan, Maharashtra", label: "Kalyan, Maharashtra" },
  { value: "Karli, Maharashtra", label: "Karli, Maharashtra" },
  { value: "Kolhapur, Maharashtra", label: "Kolhapur, Maharashtra" },
  { value: "Mahabaleshwar, Maharashtra", label: "Mahabaleshwar, Maharashtra" },
  { value: "Malegaon, Maharashtra", label: "Malegaon, Maharashtra" },
  { value: "Matheran, Maharashtra", label: "Matheran, Maharashtra" },
  { value: "Mumbai, Maharashtra", label: "Mumbai, Maharashtra" },
  { value: "Nagpur, Maharashtra", label: "Nagpur, Maharashtra" },
  { value: "Nanded, Maharashtra", label: "Nanded, Maharashtra" },
  { value: "Nashik, Maharashtra", label: "Nashik, Maharashtra" },
  { value: "Osmanabad, Maharashtra", label: "Osmanabad, Maharashtra" },
  { value: "Pandharpur, Maharashtra", label: "Pandharpur, Maharashtra" },
  { value: "Parbhani, Maharashtra", label: "Parbhani, Maharashtra" },
  { value: "Pune, Maharashtra", label: "Pune, Maharashtra" },
  { value: "Ratnagiri, Maharashtra", label: "Ratnagiri, Maharashtra" },
  { value: "Sangli, Maharashtra", label: "Sangli, Maharashtra" },
  { value: "Satara, Maharashtra", label: "Satara, Maharashtra" },
  { value: "Sevagram, Maharashtra", label: "Sevagram, Maharashtra" },
  { value: "Solapur, Maharashtra", label: "Solapur, Maharashtra" },
  { value: "Thane, Maharashtra", label: "Thane, Maharashtra" },
  { value: "Ulhasnagar, Maharashtra", label: "Ulhasnagar, Maharashtra" },
  { value: "Vasai-Virar, Maharashtra", label: "Vasai-Virar, Maharashtra" },
  { value: "Wardha, Maharashtra", label: "Wardha, Maharashtra" },
  { value: "Yavatmal, Maharashtra", label: "Yavatmal, Maharashtra" },
  { value: "Manipur", label: "Manipur" },
  { value: "Imphal, Manipur", label: "Imphal, Manipur" },

  // Meghalaya
  { value: "Meghalaya", label: "Meghalaya" },
  { value: "Cherrapunji, Meghalaya", label: "Cherrapunji, Meghalaya" },
  { value: "Shillong, Meghalaya", label: "Shillong, Meghalaya" },

  // Mizoram
  { value: "Mizoram", label: "Mizoram" },
  { value: "Aizawl, Mizoram", label: "Aizawl, Mizoram" },
  { value: "Lunglei, Mizoram", label: "Lunglei, Mizoram" },

  // Nagaland
  { value: "Nagaland", label: "Nagaland" },
  { value: "Kohima, Nagaland", label: "Kohima, Nagaland" },
  { value: "Mon, Nagaland", label: "Mon, Nagaland" },
  { value: "Phek, Nagaland", label: "Phek, Nagaland" },
  { value: "Wokha, Nagaland", label: "Wokha, Nagaland" },
  { value: "Zunheboto, Nagaland", label: "Zunheboto, Nagaland" },

  // Odisha
  { value: "Odisha", label: "Odisha" },
  { value: "Balangir, Odisha", label: "Balangir, Odisha" },
  { value: "Baleshwar, Odisha", label: "Baleshwar, Odisha" },
  { value: "Baripada, Odisha", label: "Baripada, Odisha" },
  { value: "Bhubaneshwar, Odisha", label: "Bhubaneshwar, Odisha" },
  { value: "Brahmapur, Odisha", label: "Brahmapur, Odisha" },
  { value: "Cuttack, Odisha", label: "Cuttack, Odisha" },
  { value: "Dhenkanal, Odisha", label: "Dhenkanal, Odisha" },
  { value: "Kendujhar, Odisha", label: "Kendujhar, Odisha" },
  { value: "Konark, Odisha", label: "Konark, Odisha" },
  { value: "Koraput, Odisha", label: "Koraput, Odisha" },
  { value: "Paradip, Odisha", label: "Paradip, Odisha" },
  { value: "Phulabani, Odisha", label: "Phulabani, Odisha" },
  { value: "Puri, Odisha", label: "Puri, Odisha" },
  { value: "Sambalpur, Odisha", label: "Sambalpur, Odisha" },
  { value: "Udayagiri, Odisha", label: "Udayagiri, Odisha" },

  // Puducherry (Union Territory)
  { value: "Puducherry", label: "Puducherry" },
  { value: "Karaikal, Puducherry", label: "Karaikal, Puducherry" },
  { value: "Mahe, Puducherry", label: "Mahe, Puducherry" },
  { value: "Puducherry, Puducherry", label: "Puducherry, Puducherry" },
  { value: "Yanam, Puducherry", label: "Yanam, Puducherry" },

  // Punjab
  { value: "Punjab", label: "Punjab" },
  { value: "Amritsar, Punjab", label: "Amritsar, Punjab" },
  { value: "Batala, Punjab", label: "Batala, Punjab" },
  { value: "Chandigarh, Punjab", label: "Chandigarh, Punjab" },
  { value: "Faridkot, Punjab", label: "Faridkot, Punjab" },
  { value: "Firozpur, Punjab", label: "Firozpur, Punjab" },
  { value: "Gurdaspur, Punjab", label: "Gurdaspur, Punjab" },
  { value: "Hoshiarpur, Punjab", label: "Hoshiarpur, Punjab" },
  { value: "Jalandhar, Punjab", label: "Jalandhar, Punjab" },
  { value: "Kapurthala, Punjab", label: "Kapurthala, Punjab" },
  { value: "Ludhiana, Punjab", label: "Ludhiana, Punjab" },
  { value: "Nabha, Punjab", label: "Nabha, Punjab" },
  { value: "Patiala, Punjab", label: "Patiala, Punjab" },
  { value: "Rupnagar, Punjab", label: "Rupnagar, Punjab" },
  { value: "Sangrur, Punjab", label: "Sangrur, Punjab" },

  // Rajasthan
  { value: "Rajasthan", label: "Rajasthan" },
  { value: "Abu, Rajasthan", label: "Abu, Rajasthan" },
  { value: "Ajmer, Rajasthan", label: "Ajmer, Rajasthan" },
  { value: "Alwar, Rajasthan", label: "Alwar, Rajasthan" },
  { value: "Amer, Rajasthan", label: "Amer, Rajasthan" },
  { value: "Barmer, Rajasthan", label: "Barmer, Rajasthan" },
  { value: "Beawar, Rajasthan", label: "Beawar, Rajasthan" },
  { value: "Bharatpur, Rajasthan", label: "Bharatpur, Rajasthan" },
  { value: "Bhilwara, Rajasthan", label: "Bhilwara, Rajasthan" },
  { value: "Bikaner, Rajasthan", label: "Bikaner, Rajasthan" },
  { value: "Bundi, Rajasthan", label: "Bundi, Rajasthan" },
  { value: "Chittaurgarh, Rajasthan", label: "Chittaurgarh, Rajasthan" },
  { value: "Churu, Rajasthan", label: "Churu, Rajasthan" },
  { value: "Dhaulpur, Rajasthan", label: "Dhaulpur, Rajasthan" },
  { value: "Dungarpur, Rajasthan", label: "Dungarpur, Rajasthan" },
  { value: "Ganganagar, Rajasthan", label: "Ganganagar, Rajasthan" },
  { value: "Hanumangarh, Rajasthan", label: "Hanumangarh, Rajasthan" },
  { value: "Jaipur, Rajasthan", label: "Jaipur, Rajasthan" },
  { value: "Jaisalmer, Rajasthan", label: "Jaisalmer, Rajasthan" },
  { value: "Jalor, Rajasthan", label: "Jalor, Rajasthan" },
  { value: "Jhalawar, Rajasthan", label: "Jhalawar, Rajasthan" },
  { value: "Jhunjhunu, Rajasthan", label: "Jhunjhunu, Rajasthan" },
  { value: "Jodhpur, Rajasthan", label: "Jodhpur, Rajasthan" },
  { value: "Kishangarh, Rajasthan", label: "Kishangarh, Rajasthan" },
  { value: "Kota, Rajasthan", label: "Kota, Rajasthan" },
  { value: "Merta, Rajasthan", label: "Merta, Rajasthan" },
  { value: "Nagaur, Rajasthan", label: "Nagaur, Rajasthan" },
  { value: "Nathdwara, Rajasthan", label: "Nathdwara, Rajasthan" },
  { value: "Pali, Rajasthan", label: "Pali, Rajasthan" },
  { value: "Phalodi, Rajasthan", label: "Phalodi, Rajasthan" },
  { value: "Pushkar, Rajasthan", label: "Pushkar, Rajasthan" },
  { value: "Sawai Madhopur, Rajasthan", label: "Sawai Madhopur, Rajasthan" },
  { value: "Shahpura, Rajasthan", label: "Shahpura, Rajasthan" },
  { value: "Sikar, Rajasthan", label: "Sikar, Rajasthan" },
  { value: "Sirohi, Rajasthan", label: "Sirohi, Rajasthan" },
  { value: "Tonk, Rajasthan", label: "Tonk, Rajasthan" },
  { value: "Udaipur, Rajasthan", label: "Udaipur, Rajasthan" },

  // Sikkim
  { value: "Sikkim", label: "Sikkim" },
  { value: "Gangtok, Sikkim", label: "Gangtok, Sikkim" },
  { value: "Gyalshing, Sikkim", label: "Gyalshing, Sikkim" },
  { value: "Lachung, Sikkim", label: "Lachung, Sikkim" },
  { value: "Mangan, Sikkim", label: "Mangan, Sikkim" },

  // Tamil Nadu
  { value: "Tamil Nadu", label: "Tamil Nadu" },
  { value: "Arcot, Tamil Nadu", label: "Arcot, Tamil Nadu" },
  { value: "Chengalpattu, Tamil Nadu", label: "Chengalpattu, Tamil Nadu" },
  { value: "Chennai, Tamil Nadu", label: "Chennai, Tamil Nadu" },
  { value: "Chidambaram, Tamil Nadu", label: "Chidambaram, Tamil Nadu" },
  { value: "Coimbatore, Tamil Nadu", label: "Coimbatore, Tamil Nadu" },
  { value: "Cuddalore, Tamil Nadu", label: "Cuddalore, Tamil Nadu" },
  { value: "Dharmapuri, Tamil Nadu", label: "Dharmapuri, Tamil Nadu" },
  { value: "Dindigul, Tamil Nadu", label: "Dindigul, Tamil Nadu" },
  { value: "Erode, Tamil Nadu", label: "Erode, Tamil Nadu" },
  { value: "Kanchipuram, Tamil Nadu", label: "Kanchipuram, Tamil Nadu" },
  { value: "Kanniyakumari, Tamil Nadu", label: "Kanniyakumari, Tamil Nadu" },
  { value: "Kodaikanal, Tamil Nadu", label: "Kodaikanal, Tamil Nadu" },
  { value: "Kumbakonam, Tamil Nadu", label: "Kumbakonam, Tamil Nadu" },
  { value: "Madurai, Tamil Nadu", label: "Madurai, Tamil Nadu" },
  { value: "Mamallapuram, Tamil Nadu", label: "Mamallapuram, Tamil Nadu" },
  { value: "Nagappattinam, Tamil Nadu", label: "Nagappattinam, Tamil Nadu" },
  { value: "Nagercoil, Tamil Nadu", label: "Nagercoil, Tamil Nadu" },
  { value: "Palayamkottai, Tamil Nadu", label: "Palayamkottai, Tamil Nadu" },
  { value: "Pudukkottai, Tamil Nadu", label: "Pudukkottai, Tamil Nadu" },
  { value: "Rajapalayam, Tamil Nadu", label: "Rajapalayam, Tamil Nadu" },
  { value: "Ramanathapuram, Tamil Nadu", label: "Ramanathapuram, Tamil Nadu" },
  { value: "Salem, Tamil Nadu", label: "Salem, Tamil Nadu" },
  { value: "Thanjavur, Tamil Nadu", label: "Thanjavur, Tamil Nadu" },
  { value: "Tiruchchirappalli, Tamil Nadu", label: "Tiruchchirappalli, Tamil Nadu" },
  { value: "Tirunelveli, Tamil Nadu", label: "Tirunelveli, Tamil Nadu" },
  { value: "Tiruppur, Tamil Nadu", label: "Tiruppur, Tamil Nadu" },
  { value: "Thoothukudi, Tamil Nadu", label: "Thoothukudi, Tamil Nadu" },
  { value: "Udhagamandalam, Tamil Nadu", label: "Udhagamandalam, Tamil Nadu" },
  { value: "Vellore, Tamil Nadu", label: "Vellore, Tamil Nadu" },
  { value: "Telangana", label: "Telangana" },
  { value: "Hyderabad, Telangana", label: "Hyderabad, Telangana" },
  { value: "Warangal, Telangana", label: "Warangal, Telangana" },
  { value: "Khammam, Telangana", label: "Khammam, Telangana" },
  { value: "Nizamabad, Telangana", label: "Nizamabad, Telangana" },
  { value: "Karimnagar, Telangana", label: "Karimnagar, Telangana" },
  { value: "Mahbubnagar, Telangana", label: "Mahbubnagar, Telangana" },
  { value: "Rangareddy, Telangana", label: "Rangareddy, Telangana" },
  
  // Tripura
  { value: "Tripura", label: "Tripura" },
  { value: "Agartala, Tripura", label: "Agartala, Tripura" },
  { value: "Dharmanagar, Tripura", label: "Dharmanagar, Tripura" },
  { value: "Kailashahar, Tripura", label: "Kailashahar, Tripura" },
  { value: "Udaipur, Tripura", label: "Udaipur, Tripura" },

  // Uttar Pradesh
  { value: "Uttar Pradesh", label: "Uttar Pradesh" },
  { value: "Agra, Uttar Pradesh", label: "Agra, Uttar Pradesh" },
  { value: "Aligarh, Uttar Pradesh", label: "Aligarh, Uttar Pradesh" },
  { value: "Allahabad, Uttar Pradesh", label: "Allahabad, Uttar Pradesh" },
  { value: "Bareilly, Uttar Pradesh", label: "Bareilly, Uttar Pradesh" },
  { value: "Ghaziabad, Uttar Pradesh", label: "Ghaziabad, Uttar Pradesh" },
  { value: "Gorakhpur, Uttar Pradesh", label: "Gorakhpur, Uttar Pradesh" },
  { value: "Kanpur, Uttar Pradesh", label: "Kanpur, Uttar Pradesh" },
  { value: "Lucknow, Uttar Pradesh", label: "Lucknow, Uttar Pradesh" },
  { value: "Mathura, Uttar Pradesh", label: "Mathura, Uttar Pradesh" },
  { value: "Moradabad, Uttar Pradesh", label: "Moradabad, Uttar Pradesh" },
  { value: "Noida, Uttar Pradesh", label: "Noida, Uttar Pradesh" },
  { value: "Saharanpur, Uttar Pradesh", label: "Saharanpur, Uttar Pradesh" },
  { value: "Varanasi, Uttar Pradesh", label: "Varanasi, Uttar Pradesh" },

  // Uttarakhand
  { value: "Uttarakhand", label: "Uttarakhand" },
  { value: "Dehradun, Uttarakhand", label: "Dehradun, Uttarakhand" },
  { value: "Haridwar, Uttarakhand", label: "Haridwar, Uttarakhand" },
  { value: "Nainital, Uttarakhand", label: "Nainital, Uttarakhand" },
  { value: "Rudraprayag, Uttarakhand", label: "Rudraprayag, Uttarakhand" },
  { value: "Rishikesh, Uttarakhand", label: "Rishikesh, Uttarakhand" },
  
  // West Bengal
  { value: "West Bengal", label: "West Bengal" },
  { value: "Asansol, West Bengal", label: "Asansol, West Bengal" },
  { value: "Bardhaman, West Bengal", label: "Bardhaman, West Bengal" },
  { value: "Berhampore, West Bengal", label: "Berhampore, West Bengal" },
  { value: "Durgapur, West Bengal", label: "Durgapur, West Bengal" },
  { value: "Kolkata, West Bengal", label: "Kolkata, West Bengal" },
  { value: "Malda, West Bengal", label: "Malda, West Bengal" },
  { value: "Siliguri, West Bengal", label: "Siliguri, West Bengal" },
  { value: "Howrah, West Bengal", label: "Howrah, West Bengal" },
  { value: "Kalyani, West Bengal", label: "Kalyani, West Bengal" },

  // Jammu and Kashmir (Union Territory)
  { value: "Jammu and Kashmir", label: "Jammu and Kashmir" },
  { value: "Jammu, Jammu and Kashmir", label: "Jammu, Jammu and Kashmir" },
  { value: "Srinagar, Jammu and Kashmir", label: "Srinagar, Jammu and Kashmir" },
  { value: "Anantnag, Jammu and Kashmir", label: "Anantnag, Jammu and Kashmir" },
  { value: "Baramulla, Jammu and Kashmir", label: "Baramulla, Jammu and Kashmir" },
  
  // Ladakh (Union Territory)
  { value: "Ladakh", label: "Ladakh" },
  { value: "Leh, Ladakh", label: "Leh, Ladakh" },
  { value: "Kargil, Ladakh", label: "Kargil, Ladakh" },

  // Andaman and Nicobar Islands (Union Territory)
  { value: "Andaman and Nicobar Islands", label: "Andaman and Nicobar Islands" },
  { value: "Port Blair, Andaman and Nicobar Islands", label: "Port Blair, Andaman and Nicobar Islands" },
  
  // Chandigarh (Union Territory)
  { value: "Chandigarh", label: "Chandigarh" },

  // Dadra and Nagar Haveli and Daman and Diu (Union Territory)
  { value: "Dadra and Nagar Haveli and Daman and Diu", label: "Dadra and Nagar Haveli and Daman and Diu" },
  { value: "Daman, Dadra and Nagar Haveli and Daman and Diu", label: "Daman, Dadra and Nagar Haveli and Daman and Diu" },
  { value: "Diu, Dadra and Nagar Haveli and Daman and Diu", label: "Diu, Dadra and Nagar Haveli and Daman and Diu" },
  
  // Lakshadweep (Union Territory)
  { value: "Lakshadweep", label: "Lakshadweep" },
  { value: "Kavaratti, Lakshadweep", label: "Kavaratti, Lakshadweep" },
]

export default statesAndCities;