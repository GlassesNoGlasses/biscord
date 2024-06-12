import { LOCAL } from "../constants";


export default class FileController {

    // upload file
    static async updateProfilePicture(userID: number, image: File): Promise<Response | undefined> {
        try {
            const formData = new FormData();
            formData.append('profile-picture', image);

            const res = await fetch(`${LOCAL}/api/updatePP/${userID}`, {
                method: 'POST',
                body: formData
            });

            if (!res.ok) {
                console.log(`Error Uploading File: ${res.statusText}`)
            }
            return res;

        } catch (error) {
            console.log(`Error Uploading File: ${error}`)
        }
    };
}
