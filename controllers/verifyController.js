import Team from "../models/Team.js";
import { convertBinary, getUniqueNode, getAnimeCharacter } from "../utils/utility.js";

const verifyConversion = async (req, res) => {
    try {
        const { teamId, binaryNumber, numberSystem, convertedValue } = req.body;
        // console.log(teamId, binaryNumber, numberSystem, convertedValue);

        let team = await Team.findOne({ teamId, binaryNumber, numberSystem });

        let attempts = team ? team.attempts : 0;
        let assignedCharacter = null;
        let imageUrl = null;
        let assignedNode = null;
        let pointsRecieved = 0;
        let status = "Correct Conversion";

        const expectedValue = convertBinary(binaryNumber, numberSystem);

        if (expectedValue !== convertedValue) {
            attempts++;
            if (attempts < 3) {
                status = "Incorrect Conversion. Try Again!";
                if (team) {
                    team.attempts = attempts;
                    await team.save();
                } else {
                    team = new Team({
                        teamId,
                        binaryNumber,
                        convertedValue: null, // No correct conversion yet
                        numberSystem,
                        animeCharacter: null,
                        assignedNode: null,
                        pointsRecieved: 0,
                        attempts
                    });
                    await team.save();
                }
                return res.status(400).json({ status, attemptsLeft: 3 - attempts });
            } else {
                status = "Unsuccessful Conversion after 3 attempts";
                pointsRecieved = 25;
            }
        } else {
            let arry = getAnimeCharacter();
            assignedCharacter = arry[0];
            imageUrl = arry[1];
            pointsRecieved = 50;
        }
        assignedNode = getUniqueNode();

        if (!team) {
            team = new Team({
                teamId,
                binaryNumber,
                convertedValue,
                numberSystem,
                animeCharacter: {
                    name: assignedCharacter,
                    imageUrl: imageUrl
                },
                assignedNode,
                pointsRecieved,
                attempts
            });
        } else {
            team.convertedValue = convertedValue;
            team.animeCharacter = {
                name: assignedCharacter,
                imageUrl: imageUrl
            };
            team.assignedNode = assignedNode;
            team.pointsRecieved = pointsRecieved;
            team.attempts = attempts;
        }

        await team.save();

        res.json({
            status,
            assignedCharacter: team.animeCharacter?.name || null,
            imageUrl: team.animeCharacter?.imageUrl || null,
            assignedNode,
            pointsRecieved
        });

        // console.log("Team data updated successfully!");
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error due to Incorrect Inputs!" });
    }
};

// export default verifyConversion;
// import Team from "../models/Team.js";
// import { convertBinary, getUniqueNode, getAnimeCharacter } from "../utils/utility.js";

// const verifyConversion = async (req, res) => {
//     try {
//         const { teamId, binaryNumber, numberSystem, convertedValue } = req.body;
//         // console.log(teamId, binaryNumber, numberSystem, convertedValue);

//         let team = await Team.findOne({ teamId, binaryNumber, numberSystem });

//         let attempts = team ? team.attempts : 0;
//         let assignedCharacter = null;
//         let imageUrl = null;
//         let assignedNode = null;
//         let pointsRecieved = 0;
//         let status = "Correct Conversion";

//         const expectedValue = convertBinary(binaryNumber, numberSystem);

//         if (expectedValue !== convertedValue) {
//             attempts++;
//             if (attempts < 3) {
//                 status = "Incorrect Conversion. Try Again!";
//                 if (team) {
//                     team.attempts = attempts;
//                     await team.save();
//                 } else {
//                     team = new Team({
//                         teamId,
//                         binaryNumber,
//                         convertedValue: null, // No correct conversion yet
//                         numberSystem,
//                         animeCharacter: null,
//                         assignedNode: null,
//                         pointsRecieved: 0,
//                         attempts
//                     });
//                     await team.save();
//                 }
//                 return res.status(400).json({ status, attemptsLeft: 3 - attempts });
//             } else {
//                 status = "Unsuccessful Conversion after 3 attempts";
//                 pointsRecieved = 25;
//             }
//         } else {
//             let arry = getAnimeCharacter();
//             assignedCharacter = arry[0];
//             imageUrl = arry[1];
//             pointsRecieved = 50;
//         }
//         assignedNode = getUniqueNode();

//         if (!team) {
//             team = new Team({
//                 teamId,
//                 binaryNumber,
//                 convertedValue,
//                 numberSystem,
//                 animeCharacter: {
//                     name: assignedCharacter,
//                     imageUrl: imageUrl
//                 },
//                 assignedNode,
//                 pointsRecieved,
//                 attempts
//             });
//         } else {
//             team.convertedValue = convertedValue;
//             team.animeCharacter = {
//                 name: assignedCharacter,
//                 imageUrl: imageUrl
//             };
//             team.assignedNode = assignedNode;
//             team.pointsRecieved = pointsRecieved;
//             team.attempts = attempts;
//         }

//         await team.save();

//         const response = {
//             status,
//             assignedNode,
//             pointsRecieved
//         };

//         if (status === "Correct Conversion") {
//             response.assignedCharacter = team.animeCharacter?.name || null;
//             response.imageUrl = team.animeCharacter?.imageUrl || null;
//         }

//         res.json(response);

//         // console.log("Team data updated successfully!");
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error due to Incorrect Inputs!" });
//     }
// };

// export default verifyConversion;
