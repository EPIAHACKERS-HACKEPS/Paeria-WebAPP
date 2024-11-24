export interface History {
    access: boolean;
    created_at: string;
    id: number;
    occupation: number;
    parking_id: string;
    time: string;
    updated_at: string;
}

export interface HourlyData {
    [hour: string]: {
        totalOccupation: number;
        count: number;
    };
}

export interface OccupationStats {
    mostOccupiedHour: string;
    leastOccupiedHour: string;
}
