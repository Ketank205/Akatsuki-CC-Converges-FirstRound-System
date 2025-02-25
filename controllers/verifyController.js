

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

