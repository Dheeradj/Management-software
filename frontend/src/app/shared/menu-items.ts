import { Injectable } from "@angular/core";

export interface Menu {
    state: string;
    name: string;
    icon: string;
    role: string;
}

const MENUITEMS = [
    { state: 'dashboard', name: 'Dashboard', icon: 'dashboard', role: '' },
    { state: 'leverancier', name: 'Manage Leveranciers', icon: 'local_shipping', role:'' },
    { state: 'klant', name: 'Manage Klant', icon: 'inventory_2', role: '' },
    { state: 'user', name: 'View user', icon: 'people', role: '' },
];

@Injectable()
export class MenuItems {
    getMenuitem(): Menu[] {
        return MENUITEMS;
    }
}