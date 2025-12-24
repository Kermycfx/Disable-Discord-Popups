import { Switch } from "@components/Switch";
import { useSettings } from "@api/settings";
import settings from "./settings";

export default function SettingsPanel() {
    const { disableTag } = useSettings(["disableTag"]);

    return (
        <div className="vc-settings-panel">
            <div className="vc-settings-layout">
                <div className="vc-settings-row">
                    <div>
                        <h4>Disable @ Tag in Guild Popups</h4>
                        <div className="vc-text-light">
                            Prevents the @ tag popup from appearing when clicking on usernames in the member list.
                            Hold a modifier key (Shift, Ctrl, Alt, or Cmd) to temporarily enable the popup.
                        </div>
                    </div>
                    <Switch
                        value={disableTag}
                        onChange={(value: boolean) => {
                            settings.store.disableTag = value;
                        }}
                    />
                </div>
            </div>
        </div>
    );
}