interface IServiceContext {
  [key: string]: {
    id: string,
    network: string,
    ports: { [key: string]: string} 
  }

}

export interface IJobContext {
  job: {
    /* The current status of the job. Possible values are success, failure, or cancelled.*/
    status: 'success'| 'failure' | 'cancelled',

    /* Information about the job's container. */
    container: {
      /* The ID of the container.*/
      id: string,

      /* The ID of the container network. The runner creates the network used by all containers in a job.*/
      network: string,


      /* The service containers created for a job. */
      services: IServiceContext
    }}
}
