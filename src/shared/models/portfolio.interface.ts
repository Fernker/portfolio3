export interface Portfolio {
    experiences: PortfolioExperience[];
    projects: PortfolioProject[];
    skills: PortfolioSkill[];
}

export interface PortfolioJson {
    experiences: any[];
    projects: any[];
    skills: any[];
}

export interface PortfolioExperience {
    company: string;
    slug: string;
    companyImgUrl: string;
    title: string;
    description: string | string[];
    descriptionBullets: string[];
    // startDate: string;
    date: string;
    skills: string[];
    screenshots: PortfolioScreenshot[];
}

export interface PortfolioScreenshot {
    url: string;
    description: string;
}

export interface PortfolioProject {
    name: string;
    status: string;
    imgUrl: string;
    description: string | string[];
    descriptionBullets?: string[];
    url?: string;
    screenshots?: PortfolioScreenshot[];
    skills: PortfolioSkill[];
}

export type PortfolioSkill =
    | 'Angular'
    | 'Javascript'
    | 'CSS'
    | 'SCSS'
    | 'Django'
    | 'HTML'
    | 'MySQL';
