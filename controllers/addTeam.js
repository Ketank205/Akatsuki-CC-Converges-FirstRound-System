import Team from "../models/Team.js";
import { getAnimeCharacter } from "../utils/utility.js";

const addTeam = async (req, res) => {
    try{
        var {teamName} = req.body;
        teamName = teamName.toLowerCase();
        // const assignedNode = getUniqueNode();
        let arry = getAnimeCharacter();
        let assignedCharacter = arry[0];
        let imageUrl = arry[1];
        let animeCharacter = {name: assignedCharacter, imageUrl};

        const team = new Team({teamName, animeCharacter});
        await team.save();
        res.status(201).json({message:"Team details added successfully."});
    }
    catch(error){
        console.log(error);
        res.status(501).json({message:"Feature unsupported."})
    }
}
export default addTeam;