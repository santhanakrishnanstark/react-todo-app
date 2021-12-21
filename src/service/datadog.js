import { datadogRum } from '@datadog/browser-rum';



export const runDataDog = () => {
    datadogRum.init({
        applicationId: 'd955726b-c5d3-4492-9899-572f7f312ea2',
        clientToken: 'pub30d89c77771d33d07c91a07b0c2fdce6',
        site: 'datadoghq.com',
        service:'reactdatadog',
        // Specify a version number to identify the deployed version of your application in Datadog 
        // version: '1.0.0',
        sampleRate: 100,
        trackInteractions: true,
        defaultPrivacyLevel: 'mask-user-input'
      });
        
      datadogRum.startSessionReplayRecording();
}