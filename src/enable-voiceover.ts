import { showHUD } from "@raycast/api";
import { exec } from "node:child_process"
import { promisify } from "node:util";

const execAsync = promisify(exec);

const VOICEOVER_STARTER_COMMAND = "/System/Library/CoreServices/VoiceOver.app/Contents/MacOS/VoiceOverStarter";

const enableVoiceOver = async () => {
  return await execAsync(VOICEOVER_STARTER_COMMAND);
};

const main = async () => {
  const out = await enableVoiceOver();
  if (out.stderr) {
    await showHUD("Error enabling VoiceOver: " + out.stderr);
  } else {
    await showHUD("VoiceOver enabled");
  }
}
export default main;
