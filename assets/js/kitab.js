const kitabs = ["Ath-Thaharah", "Mas'alah al-Maniy", "Istiqbal al-Qiblah", "Al-Imamah", "Ijad al-Jumu'ah", "Shalat al-'Idayn", "Shalat al-Kusuf", "Shalat al-Istisqa'", "Shalat al-Jana'iz", "Al-Hukmu fi Tharik al-Shalat", "Al-Shalat al-Wajibah wa Al-Tathawwu' wa al-Shiyam", "Al-Zakat al-Kabir", "Zakat al-Fithri", "Zakat Mal al-Yatim", "Al-Shiyam al-Kabir", "Al-Manasik al-Kabir", "Al-Manasik al-Ausath", "Mukhtashar al-Manasik", "Al-Shaid wa al-Dzaba'ih", "Al-Buyu' al-Kabir", "Al-Sharf wa al-Tijarah", "Al-Rahn al-Shaghir", "Al-Risalah", "Ahkam al-Qur'an", "dan masih banyak lagi ..."];

let txt = "";
kitabs.forEach(functionKitab);
document.getElementById("kitab").innerHTML = txt;

function functionKitab(value, index, array) {
  txt += "<li>" + value + "</li>"; 
}
