import { Event } from './events.type'

export interface StateOfExperiments {
  Total: number
  Running: number
  Waiting: number
  Paused: number
  Failed: number
  Finished: number
}

export enum StateOfExperimentsEnum {
  Total = 'Total',
  Running = 'Running',
  Waiting = 'Waiting',
  Paused = 'Paused',
  Failed = 'Failed',
  Finished = 'Finished',
}

export interface Experiment {
  kind: string
  namespace: string
  name: string
  created: string
  status: keyof StateOfExperiments
  uid: uuid
  events?: Event[]
}
