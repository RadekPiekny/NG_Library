export interface ReleaseFeature {
    type: 'bug' | 'update';
    description: string;
    breakingChange: boolean;
    reason?: string;
}

export interface ReleaseVersion {
    major: number;
    minor: number;
    patch: number;
}

export interface ReleaseData {
    version: ReleaseVersion;
    date: Date;
    features: ReleaseFeature[];
    breakingChange: boolean;
    visible?: boolean;
}