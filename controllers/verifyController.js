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

//         res.json({
//             status,
//             assignedCharacter: team.animeCharacter?.name || null,
//             imageUrl: team.animeCharacter?.imageUrl || null,
//             assignedNode,
//             pointsRecieved
//         });

//         // console.log("Team data updated successfully!");
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error due to Incorrect Inputs!" });
//     }
// };

// export default verifyConversion;

import Team from "../models/Team.js";
import { convertBinary } from "../utils/utility.js";

const verifyController = async (req, res) => {
    try {
        const { teamName, binaryNumber, numberSystem, convertedValue } = req.body;
        const whichTeam = await Team.findOne({ teamName: teamName.toLowerCase() });
        
        if (!whichTeam) {
            return res.status(404).json({ message: "Team not found." });
        }

        // Check if the team has already received points
        if (whichTeam.pointsRecieved > 0) {
            return res.status(403).json({ message: "This team has already completed their attempts." });
        }

        // Check if the binary number is already assigned to another team
        const existingBinaryNumber = await Team.findOne({ binaryNumber: binaryNumber });
        if (existingBinaryNumber && existingBinaryNumber.teamName !== teamName.toLowerCase()) {
            return res.status(403).json({ message: "This binary number has already been assigned to another team." });
        }

        let status = "Failed Conversion: Try Again!";
        let points = 0;
        let showCharacter = false;

        if (convertedValue === convertBinary(binaryNumber, numberSystem)) {
            if (whichTeam.attempts === 0) points = 50;
            else if (whichTeam.attempts === 1) points = 40;
            else if (whichTeam.attempts === 2) points = 30;

            status = "Successful Conversion";
            showCharacter = true;
        } else {
            if (whichTeam.attempts === 2) {
                points = 25;
                showCharacter = true;
            }
        }

        await whichTeam.updateOne({
            binaryNumber: binaryNumber,
            numberSystem: numberSystem,
            pointsRecieved: points,
            attempts: whichTeam.attempts + 1
        });
        
        let response = {
            status: status,
            teamName: teamName,
            pointsRecieved: points
        };
        
        if (showCharacter) {
            response.assignedNode = whichTeam.assignedNode;
            response.assignedCharacter = whichTeam.animeCharacter.name;
            response.imageUrl = whichTeam.animeCharacter.imageUrl;
        }
        
        res.status(200).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(501).json({ message: "Feature unsupported." });
    }
}

export default verifyController;
