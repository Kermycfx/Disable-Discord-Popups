import { definePlugin } from "@utils/types";
import { Devs } from "@utils/constants";
import settings from "./settings";

export default definePlugin({
    name: "DisableTagInPopups",
    description: "Disables the ability to @ tag users in guild popups",
    authors: [{ name: "Kermy.lol" }],
    settings,

    patches: [
        {
            find: '"GUILD_MEMBER_LIST",',
            replacement: {
                match: /(\w+)\.default\.MemberListItem\)/,
                replace: "$self.disableTag($1).default.MemberListItem)",
            }
        }
    ],

    disableTag(component: any) {
        if (!settings.store.disableTag) return component;
        
        const original = component.default?.MemberListItem;
        if (!original) return component;
        
        component.default.MemberListItem = function (props: any) {
            if (props.onClick) {
                const originalOnClick = props.onClick;
                props.onClick = function (e: MouseEvent) {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) {
                        return originalOnClick(e);
                    }
                    e.preventDefault();
                    e.stopPropagation();
                };
            }
            return original(props);
        };
        return component;
    },
    
    start() {
        // Plugin started
    },
    
    stop() {
        // Plugin stopped
    }
});