// export enum EEventNames {
//     FunctionName,
// }

// export type EEventTypes = {
//     [EEventNames.FunctionName]: [];
// };

// export type EventCallbackParams = unknown[];

// export type EventCallback<T extends EventCallbackParams> = (...args: T) => void;

// export class EventEmitter {
//     private static innerInstance: EventEmitter | null = null;

//     private eventCallbacks: { [key in EEventNames]?: EventCallback<unknown[]>[] } = {};

//     public static get instance(): EventEmitter {
//         if (!this.innerInstance) {
//             this.innerInstance = new EventEmitter();
//         }

//         return this.innerInstance;
//     }

//     public on<type extends keyof EEventTypes>(
//         eventName: type,
//         callback: EventCallback<EEventTypes[type]>
//     ): void {
//         this.eventCallbacks[eventName] = this.eventCallbacks[eventName] || [];
//         this.eventCallbacks[eventName]!.push(callback);
//     }

//     public dispatch<type extends keyof EEventTypes>(eventName: type, ...args: EEventTypes[type]): void {
//         if (!this.eventCallbacks[eventName]) {
//             return;
//         }

//         this.eventCallbacks[eventName]?.forEach((cb) => cb(...args));
//     }

//     public removeListener<type extends keyof EEventTypes>(
//         eventName: type,
//         callback: EventCallback<EEventTypes[type]>
//     ): void {
//         const allCallbacks = this.eventCallbacks[eventName] || [];
//         const index = allCallbacks.indexOf(callback);
//         if (index > -1) {
//             allCallbacks.splice(index, 1);
//         }
//     }
// }
export const a = 1;
