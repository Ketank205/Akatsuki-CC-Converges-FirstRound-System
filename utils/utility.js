// export const convertBinary = (binary, system) => {
//     const decimal = parseInt(binary, 2);
//     if (system === "decimal") return decimal.toString();
//     if (system === "octal") return decimal.toString(8);
//     if (system === "hexadecimal") return decimal.toString(16).toUpperCase();
//     return null;
// };

// const assignedNodes = new Set(); // Track assigned nodes

// const matrix = [
//     ["CC[1][1]", "CC[1][2]", "CC[1][3]"],
//     ["CC[2][1]", "CC[2][2]", "CC[2][3]"],
//     ["CC[3][1]", "CC[3][2]", "CC[3][3]"],
//     ["CC[4][1]", "CC[4][2]", "CC[4][3]"],
//     ["CC[5][1]", "CC[5][2]", "CC[5][3]"],
//     ["CC[6][1]", "CC[6][2]", "CC[6][3]"],
//     ["CC[7][1]", "CC[7][2]", "CC[7][3]"],
//     ["CC[8][1]", "CC[8][2]", "CC[8][3]"],
//     ["CC[9][1]", "CC[9][2]", "CC[9][3]"],
//     ["CC[10][1]", "CC[10][2]", "CC[10][3]"],

// ];

// export const getUniqueNode = () => {
//     let assignedNode;

//     // Keep generating until an unassigned node is found
//     while (true) {
//         let randomRow = Math.floor(Math.random() * 10);
//         let randomCol = Math.floor(Math.random() * 3);
//         assignedNode = matrix[randomRow][randomCol];

//         // If node is not assigned yet, break the loop
//         if (!assignedNodes.has(assignedNode)) {
//             assignedNodes.add(assignedNode);
//             break;
//         }
//     }
//     return assignedNode;
// }

// const animeCharacterImages = {
//     "Zero Two": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739607665/Zero_Two_nhzcl2.png",
//     "Yuji Itadori": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739607961/Yuji_Itadori_gbeyvw.png",
//     "Tanjiro Kamado": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739607961/Tanjiro_Kamado_cs9s4g.png",
//     "Yusuke Urameshi": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739607969/Yusuke_Urameshi_of66sd.png",
//     "Simon": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739608163/Simon_l8roeq.png",
//     "Shinji Shinji": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739608189/Shinji_Shinji_azugpx.png",
//     "Spike Spiegel": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739608180/Spike_Spiegel_dyfdxn.png",
//     "Roy Mustang": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739608504/Roy_Mustang_djt4rs.png",
//     "Satoru Gojo": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739608552/Satoru_Gojo_dcgrbp.png",
//     "Saitama": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739608552/Saitama_or3m5q.png",
//     "Monkey D. Luffy": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739608806/Monkey_D._Luffy_lpqjje.png",
//     "Otaku ms3ijo": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739608857/Otaku_ms3ijo.png",
//     "Naruto Uzumaki": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739608828/Naruto_Uzumaki_efinbq.png",
//     "Levi Ackerman": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739609041/Levi_Ackerman_hc1wmk.png",
//     "Megumi Fushiguro": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739609127/Megumi_Fushiguro_sdx2zv.png",
//     "Kirito": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739609367/Kirito_tfqyte.png",
//     "Lelouch Lamperouge": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739609369/Lelouch_Lamperouge_w6wzwa.png",
//     "Kenshin Himura": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739609370/Kenshin_Himura_yvcirc.png",
//     "Izuku Midoriya": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739609566/Izuku_Midoriya_vwa6ej.png",
//     "Ken Kaneki": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739609580/Ken_Kaneki_txja6y.png",
//     "Itachi": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739609579/Itachi_eyfdbp.png",
//     "Inuyasha": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739609677/Inuyasha_Inuyasha_p3mwzg.png",
//     "Ichigo Kurosaki": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739609679/Ichigo_Kurosaki_egfixv.png",
//     "Eren Yeager": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739609858/Eren_Yeager_gucmwf.png",
//     "Gon Freecss": "https://res.cloudinary.comnary.com/dz5n9dlah/image/upload/v1739609883/Gon_Freecss_c0jpmv.png",
//     "Asta": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739610100/Asta_vnlxjt.png",
//     "Denji": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739610119/Denji_byehr8.png",
//     "Arlong": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739599158/Arlong_ikrzqy.png",
//     "Blackbeard": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739599350/Blackbeard_iu1rbq.png",
//     "Buggy the Clown": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739599446/Buggy_the_Clown_a5t7gp.png",
//     "Crocodile": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739599556/Crocodile_h86kvw.png",
//     "Doflamingo": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739599660/Doflamingo_gl7wwl.png",
//     "Enel": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739601489/Enel_hq47di.png",
//     "Esdeath": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739605498/Esdeath_fgeil3.png",
//     "Gilgamesh": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739605622/Gilgamesh_tcrtwu.png",
//     "Hisoka Morow": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739605635/Hisoka_Morow_m3c0fc.png",
//     "Kefka Palazzo": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739605765/Kefka_Palazzo_hufzaw.png",
//     "Naruto Shippuden": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739605771/Naruto_Shippuden_xyvcl4.png",
//     "Lucius Zogratis": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739605771/Lucius_Zogratis_caboh6.png",
//     "Mahito": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739605815/Mahito_yxxibu.png",
//     "Ragyo Kiryuin": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739606042/Ragyo_Kiryuin_zvsfof.png",
//     "Major": "https://res.cloudi/dz5n9dlah/image/upload/v1739606096/The_Major_x1yi79.png",
//     "Gintoki Sakata": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739609873/Gintoki_Sakata_ebqhkb.png",
//     "Edward Elric": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739610057/Edward_Elric_dr3ism.png",
//     "Tomura Shigaraki": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739606135/Tomura_Shigaraki_fcug2k.png",
//     "Seryu Ubiquitous": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739606153/Seryu_Ubiquitous_qco8we.png",
//     "Yami Bakura": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739606318/Yami_Bakura_ozp7me.png",
//     "Yuno Gasai": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739606475/Yuno_Gasai_hc1ai4.png",
//     "Aizen Sosuke": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739606545/Aizen_Sosuke_dgscas.png",
//     "Cell": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739606631/Cell_nrstvt.png",
//     "Frieza": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739606684/Frieza_bm69hy.png",
//     "Dio Brando": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739606685/Dio_Brando_bhhmei.png",
//     "Griffith": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739606686/Griffith_uyirti.png",
//     "Light Yagami": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739607011/Light_Yagami_rfotgg.png",
//     "Shishio Makoto": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739607024/Shishio_Makoto_dsibvi.png",
//     "Madara Uchiha": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739607025/Madara_Uchiha_ys5tmk.png",
//     "Orochimaru": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739607032/Orochimaru_hj2xcs.png"
// };

// const assignedCharacters = new Set(); 

// export const getAnimeCharacter = () => {
//     let characterKeys = Object.keys(animeCharacterImages);
//     if (assignedCharacters.size === characterKeys.length) {
//         assignedCharacters.clear();
//     }
//     let availableCharacters = characterKeys.filter(char => !assignedCharacters.has(char));
//     let assignedCharacter = availableCharacters[Math.floor(Math.random() * availableCharacters.length)];
//     assignedCharacters.add(assignedCharacter);
//     return [assignedCharacter, animeCharacterImages[assignedCharacter]];
// };

export const convertBinary = (binary, system) => {
    const decimal = parseInt(binary, 2);
    if (system === "decimal") return decimal.toString();
    if (system === "octal") return decimal.toString(8);
    if (system === "hexadecimal") return decimal.toString(16).toUpperCase();
    return null;
};

const animeCharacterImages = {
    "Zero Two": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739607665/Zero_Two_nhzcl2.png",
    "Yuji Itadori": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739607961/Yuji_Itadori_gbeyvw.png",
    "Tanjiro Kamado": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739607961/Tanjiro_Kamado_cs9s4g.png",
    "Yusuke Urameshi": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739607969/Yusuke_Urameshi_of66sd.png",
    "Simon": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739608163/Simon_l8roeq.png",
    "Shinji Shinji": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739608189/Shinji_Shinji_azugpx.png",
    "Spike Spiegel": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739608180/Spike_Spiegel_dyfdxn.png",
    "Roy Mustang": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739608504/Roy_Mustang_djt4rs.png",
    "Satoru Gojo": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739608552/Satoru_Gojo_dcgrbp.png",
    "Saitama": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739608552/Saitama_or3m5q.png",
    "Monkey D. Luffy": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739608806/Monkey_D._Luffy_lpqjje.png",
    "Otaku ms3ijo": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739608857/Otaku_ms3ijo.png",
    "Naruto Uzumaki": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739608828/Naruto_Uzumaki_efinbq.png",
    "Levi Ackerman": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739609041/Levi_Ackerman_hc1wmk.png",
    "Megumi Fushiguro": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739609127/Megumi_Fushiguro_sdx2zv.png",
    "Kirito": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739609367/Kirito_tfqyte.png",
    "Lelouch Lamperouge": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739609369/Lelouch_Lamperouge_w6wzwa.png",
    "Kenshin Himura": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739609370/Kenshin_Himura_yvcirc.png",
    "Izuku Midoriya": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739609566/Izuku_Midoriya_vwa6ej.png",
    "Ken Kaneki": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739609580/Ken_Kaneki_txja6y.png",
    "Itachi": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739609579/Itachi_eyfdbp.png",
    "Inuyasha": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739609677/Inuyasha_Inuyasha_p3mwzg.png",
    "Ichigo Kurosaki": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739609679/Ichigo_Kurosaki_egfixv.png",
    "Eren Yeager": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739609858/Eren_Yeager_gucmwf.png",
    "Gon Freecss": "https://res.cloudinary.comnary.com/dz5n9dlah/image/upload/v1739609883/Gon_Freecss_c0jpmv.png",
    "Asta": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739610100/Asta_vnlxjt.png",
    "Denji": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739610119/Denji_byehr8.png",
    "Arlong": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739599158/Arlong_ikrzqy.png",
    "Blackbeard": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739599350/Blackbeard_iu1rbq.png",
    "Buggy the Clown": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739599446/Buggy_the_Clown_a5t7gp.png",
    "Crocodile": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739599556/Crocodile_h86kvw.png",
    "Doflamingo": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739599660/Doflamingo_gl7wwl.png",
    "Enel": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739601489/Enel_hq47di.png",
    "Esdeath": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739605498/Esdeath_fgeil3.png",
    "Gilgamesh": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739605622/Gilgamesh_tcrtwu.png",
    "Hisoka Morow": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739605635/Hisoka_Morow_m3c0fc.png",
    "Kefka Palazzo": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739605765/Kefka_Palazzo_hufzaw.png",
    "Naruto Shippuden": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739605771/Naruto_Shippuden_xyvcl4.png",
    "Lucius Zogratis": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739605771/Lucius_Zogratis_caboh6.png",
    "Mahito": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739605815/Mahito_yxxibu.png",
    "Ragyo Kiryuin": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739606042/Ragyo_Kiryuin_zvsfof.png",
    "Major": "https://res.cloudi/dz5n9dlah/image/upload/v1739606096/The_Major_x1yi79.png",
    "Gintoki Sakata": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739609873/Gintoki_Sakata_ebqhkb.png",
    "Edward Elric": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739610057/Edward_Elric_dr3ism.png",
    "Tomura Shigaraki": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739606135/Tomura_Shigaraki_fcug2k.png",
    "Seryu Ubiquitous": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739606153/Seryu_Ubiquitous_qco8we.png",
    "Yami Bakura": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739606318/Yami_Bakura_ozp7me.png",
    "Yuno Gasai": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739606475/Yuno_Gasai_hc1ai4.png",
    "Aizen Sosuke": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739606545/Aizen_Sosuke_dgscas.png",
    "Cell": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739606631/Cell_nrstvt.png",
    "Frieza": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739606684/Frieza_bm69hy.png",
    "Dio Brando": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739606685/Dio_Brando_bhhmei.png",
    "Griffith": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739606686/Griffith_uyirti.png",
    "Light Yagami": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739607011/Light_Yagami_rfotgg.png",
    "Shishio Makoto": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739607024/Shishio_Makoto_dsibvi.png",
    "Madara Uchiha": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739607025/Madara_Uchiha_ys5tmk.png",
    "Orochimaru": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1739607032/Orochimaru_hj2xcs.png",
    "Alucard": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1740378763/Alucard_aw0xih.png",
    "Emilia": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1740378787/Emilia_yohzeb.png",
    "Holo": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1740378788/Holo_hjgi7u.png",
    "Kamina": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1740378938/Kamina_d2jqdq.png",
    "Johan": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1740378938/Johan_Liebert_iqniki.png",
    "Kamado": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1740378939/Kamado_Nezuko_lclvxk.png",
    "Reigen": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1740379091/Reigen_Arataka_ctznbm.png",
    "Shigeo": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1740379092/Shigeo_mfziae.png",
    "Rimuru": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1740379092/Rimuru_Tempest_hsub1q.png",
    "Todoroki": "https://res.cloudinary.com/dz5n9dlah/image/upload/v1740379232/Todoroki_a3eqvn.png"
};

const assignedCharacters = new Set(); 

export const getAnimeCharacter = () => {
    let characterKeys = Object.keys(animeCharacterImages);
    if (assignedCharacters.size === characterKeys.length) {
        assignedCharacters.clear();
    }
    let availableCharacters = characterKeys.filter(char => !assignedCharacters.has(char));
    let assignedCharacter = availableCharacters[Math.floor(Math.random() * availableCharacters.length)];
    assignedCharacters.add(assignedCharacter);
    return [assignedCharacter, animeCharacterImages[assignedCharacter]];
};

