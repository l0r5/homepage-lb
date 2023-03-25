import { baloise, netcetera } from '../assets';

export type Experience = {
  title: string;
  company_name: string;
  location: string;
  icon: string;
  company_url: string,
  date: string;
  points: string[];
}

export const experiences: Experience[] = [
  {
    title: 'Software Engineer / Full-stack Developer',
    company_name: 'Netcetera AG, Zurich, CH',
    location: 'Zurich, CH',
    icon: netcetera,
    company_url: 'https://www.netcetera.com/',
    date: 'July 2021 - Present',
    points: [
      'Development of a multi-tenant SaaS Web Application for Swiss pension funds.',
      'Implementation of features using React in the frontend and Spring Boot and Open Api in the Backend.',
      'Deployment of microservices using a GitOps approach with Kubernetes, Helm Charts, Rancher and ArgoCD.'
    ]
  },
  {
    title: 'Software Engineer / Solution Architect',
    company_name: 'Bâloise Insurance & Bâloise Bank SoBa',
    location: 'Basel, CH',
    icon: baloise,
    company_url: 'https://www.baloise.ch/',
    date: 'March 2020 - May 2021',
    points: [
      'Integration of the GDPR orchestration system “SmartRM” (by Butos) into the Bâloise system landscape.',
      'Design and implementation of a stream-processing API using Apache Kafka.',
      'Design and implementation of a Java Client-SDK for simplified connecting of business applications to the API.',
      'Implementation of Java testing applications using Spring Boot and deploying them to the cloud using Docker and Openshift.'
    ]
  },
  {
    title: 'Co-Founder (CTO)',
    company_name: 'Bâloise Insurance & Bâloise Bank SoBa',
    location: 'Basel/Zurich, CH',
    icon: baloise,
    company_url: 'https://www.baloise.ch/',
    date: 'October 2019 - March 2020',
    points: [
      'Corporate startup project, funded by Bâloise, with the goal to contribute to the corporate strategy and to discover new markets.',
      'Participation in the "F10 Fintech Incubator & Accelerator P2 Programm" batch V.',
      'Applying design thinking and lean startup techniques for the validation and implementation of business ideas.',
      'Implementation of a pricing engine prototype for parameterized insurance.'
    ]
  },
  {
    title: 'Software Engineer / Release Manager',
    company_name: 'Bâloise Insurance & Bâloise Bank SoBa',
    location: 'Basel, CH',
    icon: baloise,
    company_url: 'https://www.baloise.ch/',
    date: 'June 2018 - October 2019',
    points: [
      'Becoming familiar with release management and DevOps and taking over the role of a release manager.',
      'Optimization of existing/establishing new CI/CD pipelines and process automation (using Jenkins).',
      'Maintaining and developing new features for the insurance policy system “PolicyCenter” (by Guidewire).',
    ]
  },
];