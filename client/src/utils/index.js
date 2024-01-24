import Filesaver from 'file-saver';
import { surpriseMePrompts } from '../constants';

// Uses the surpriseMePrompts file to return a prompt at random.
export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() *
    surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if(randomPrompt === prompt) return getRandomPrompt(prompt)

    return randomPrompt;
}

// Function to download the stored image using Filesaver.
export async function downloadImage(_id, photo) {
    Filesaver.saveAs(photo, `downlaod-${_id}.jpg`);
}