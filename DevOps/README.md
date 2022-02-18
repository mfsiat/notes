# DevOps Preparation 
> Some useful information on DevOps Engineering 

## Interview Preparation 

- OSI (Open System Interconnection) Model, What is **`OSI`** Model? 
    - In Layme's terms, the OSI model provides a standard for different computer systems to be able to communicate with each other. 
    - From cloudflare blog: [link](https://www.cloudflare.com/en-in/learning/ddos/glossary/open-systems-interconnection-model-osi/)
    - In Brief 
        - The open systems interconnection model is a conceptual model created by the international organization for standardiazation which enables diverse communication systems to communicate using standard protocols. 
        - In plain english the osi provides a standard for different computer systems to be able to communicate with each other. 
        - It's based on the concept of splitting up a communication system into seven abstract layers, each one stacked upon the last 
            1. Application layer 
            2. Presentation layer 
            3. Session layer 
            4. Transport layer 
            5. Network layer 
            6. Datalink layer 
            7. Physical layer 
        - Why does it matter ? 
            - The modern internet doesn't strictly follow the osi model the osi model is still very useful for troubleshooting network problems. 
            - It helps to break down the problem and isolate the source of the trouble. 
            - Brief could be found on the link

- TCP/IP Model 
    - It is a 4 layer model 
        1. Application layer 
        2. Transport layer 
        3. Internet layer 
        4. Network Access layer 
    - Difference between OSI and TCP/IP model link: [click here](https://community.fs.com/blog/tcpip-vs-osi-whats-the-difference-between-the-two-models.html)

- Uber Fullfilment platform rearchitecture: [link](https://eng.uber.com/building-ubers-fulfillment-platform/)
    - How uber scale to millions of concurrent requests? Uber uses **`GCP Spanner`** to handle this request. Cloud spanner is a managed relational database that is highly scable with strong consistency. 
    - Ubers line of business is powered by it's fulfillment platform. It is the backbone of Uber's architecture. The platform can handle millions of concurrent users and billions of trips per year. That means billions of database transactions per day.
    - Uber stores all of its order information in Google Cloud Spanner for its scalability & consistency. 
    - Previously they have used an on-prem database ( Cassandra ). However, as the Uber ecosystem grew, they had problems with the eventual consistency model of Cassandra, resulting in data inconsistencies. 
    - Also, Uber uses a Hybrid cloud network architecture that has less latency across services by design. 
    - It took them **`six months to migrate from the old database stack to the new one`**. They migrated from on-prem data to spanner without impacting live users. 
    - Following are the migration challenges faced by Uber
        - How to test at Uber scale 
        - Performance * cost optimization 
        - Capacity planning 
        - Live migration * Zero downtime. 
        - Observability, alerting, data protection strategy & incident management
    - 
