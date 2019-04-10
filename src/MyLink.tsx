import * as React from "react";

function MyLink(props: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, ref: React.Ref<HTMLAnchorElement>) {
    // the implementation just rendors an anchor, but imagine this as the custom link of a router solution or similar
    return <a {...props} ref={ref} />;
}

export { MyLink as MyLinkWithoutRefForwarding };
export default React.forwardRef(MyLink);
