declare class SideLink extends HTMLAnchorElement {
    constructor();
    handleClick(ev: any): void;
    get uuid(): string;
}
export { SideLink };
