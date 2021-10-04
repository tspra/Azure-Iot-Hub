using System;
using System.Collections.Generic;
using System.Text;

namespace IOTDeviceMessageRepository.AppSettings
{
    public class  CosmosDBSetting
    {
        /// <summary>
        ///     CosmosDb Account - The Azure Cosmos DB endpoint
        /// </summary>
        public string EndpointUrl { get; set; }
        /// <summary>
        ///     Key - The primary key for the Azure DocumentDB account.
        /// </summary>
        public string PrimaryKey { get; set; }
        /// <summary>
        ///     Database name
        /// </summary>
        public string DatabaseName { get; set; }

        /// <summary>
        ///     List of containers in the database
        /// </summary>
        public List<ContainerInfo> Containers { get; set; }

        public CosmosDBSetting(string key, string endpoint, string db)
        {
            this.PrimaryKey = key;
            this.EndpointUrl = endpoint;
            this.DatabaseName = db;
        }

    }
    public class ContainerInfo
    {
        /// <summary>
        ///     Container Name
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        ///     Container partition Key
        /// </summary>
        public string PartitionKey { get; set; }
    }
}
