export type Segment = { id:string; name:string; road:string; congestion:number; risk:number; speed:number; volume:number; lat:number; x:number; y:number };
export const initialSegments: Segment[] = [
 {id:"CP-01",name:"Anna Salai · Gemini",road:"Anna Salai",congestion:72,risk:68,speed:18,volume:1240,lat:13.0569,x:26,y:30},
 {id:"CP-02",name:"Mount Road Junction",road:"Mount Road",congestion:48,risk:34,speed:27,volume:890,lat:13.0604,x:51,y:45},
 {id:"CP-03",name:"Nungambakkam High Rd",road:"Nungambakkam",congestion:31,risk:22,speed:34,volume:610,lat:13.0612,x:71,y:25},
 {id:"CP-04",name:"Cathedral Road",road:"Cathedral Road",congestion:84,risk:79,speed:12,volume:1510,lat:13.0435,x:68,y:66},
 {id:"CP-05",name:"Teynampet Signal",road:"Teynampet",congestion:59,risk:51,speed:23,volume:1020,lat:13.0418,x:38,y:70},
 {id:"CP-06",name:"Thousand Lights",road:"Thousand Lights",congestion:24,risk:16,speed:39,volume:470,lat:13.0580,x:15,y:54}
];
export const history = [
 {time:"Now",congestion:48,risk:36},{time:"+2m",congestion:51,risk:38},{time:"+4m",congestion:55,risk:43},
 {time:"+6m",congestion:61,risk:49},{time:"+8m",congestion:57,risk:45},{time:"+10m",congestion:64,risk:53},
 {time:"+12m",congestion:60,risk:47},{time:"+15m",congestion:54,risk:41}
];
export const experiments = [
 {id:"traffic-lstm",title:"Traffic Flow Forecaster",tag:"RNN / LSTM",status:"LIVE",description:"Sequence model forecasts congestion across rolling 15-minute windows using recent speed, volume and weather signals.",metric:"91.4%",metricLabel:"Validation accuracy",color:"blue",layers:["Input sequence · 12 steps","LSTM · 64 hidden units","Dropout · 0.2","Dense · congestion + risk heads"]},
 {id:"accident-cnn",title:"Road Incident Classifier",tag:"CNN",status:"READY",description:"A convolutional baseline explores how road context and incident patterns can support segment-level risk classification.",metric:"88.2%",metricLabel:"Validation F1",color:"purple",layers:["Feature tensor · road context","Conv1D · 32 filters","Max pooling + dropout","Softmax · 3 risk classes"]},
 {id:"weather-attention",title:"Weather Attention Model",tag:"Transformer",status:"IN PROGRESS",description:"Attention-based fusion weights rainfall, visibility, speed and traffic density to make risk drivers more interpretable.",metric:"0.84",metricLabel:"Risk AUC",color:"mint",layers:["Multivariate embeddings","Positional encoding","Multi-head attention · 4 heads","Risk score regression head"]},
 {id:"baseline-regression",title:"Speed Baseline",tag:"Baseline",status:"READY",description:"A simple regression baseline provides a transparent point of comparison for the neural models.",metric:"7.8",metricLabel:"MAE · km/h",color:"orange",layers:["Normalized features","Dense · 32 units","ReLU activation","Linear speed output"]}
];