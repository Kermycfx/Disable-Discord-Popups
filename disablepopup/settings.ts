import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

export default definePluginSettings({
    disableTag: {
        type: OptionType.BOOLEAN,
        default: true,
        description: "Disable @ tag in guild popups",
        restartNeeded: true,
    },
});
