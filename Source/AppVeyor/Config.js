{
  "Server": {
    "WorldName": "Test-ACE",
    "Network": {
      "Host": "0.0.0.0",
      "Port": 9010,
      "MaximumAllowedSessions": 128,
      "DefaultSessionTimeout": 60
    },
    "Accounts": {
      "OverrideCharacterPermissions": true,
      "DefaultAccessLevel": 0,
      "AllowAutoAccountCreation": true,
      "PasswordHashWorkFactor": 8,
      "ForceWorkFactorMigration": true
    },
    "DatFilesDirectory": "c:\\ACE\\",
    "ShutdownInterval": "5",
    "ServerPerformanceMonitorAutoStart": false,
    "WorldDatabasePrecaching": false,
    "LandblockPreloading": true,
    "PreloadedLandblocks": [
        //{
        //    "Id": "E74EFFFF",
        //    "Description": "Hebian-To (Global Events)",
        //    "Permaload": true,
        //    "IncludeAdjacents": false,
        //    "Enabled": true
        //},
        //{
        //    "Id": "A9B4FFFF",
        //    "Description": "Holtburg",
        //    "Permaload": true,
        //    "IncludeAdjacents": true,
        //    "Enabled": false
        //},
        {
            "Id": "DA55FFFF",
            "Description": "Shoushi",
            "Permaload": true,
            "IncludeAdjacents": true,
            "Enabled": false
        },
        //{
        //    "Id": "7D64FFFF",
        //    "Description": "Yaraq",
        //    "Permaload": true,
        //    "IncludeAdjacents": true,
        //    "Enabled": false
        //},
        {
            "Id": "0007FFFF",
            "Description": "Town Network",
            "Permaload": true,
            "IncludeAdjacents": false,
            "Enabled": false
        }
        //{
        //    "Id": "00000000",
        //    "Description": "Apartment Landblocks",
        //    "Permaload": true,
        //    "IncludeAdjacents": false,
        //    "Enabled": false
        //}
    ]
  },
  "MySql": {
    "Authentication": {
      "Host": "127.0.0.1",
      "Port": 3306,
      "Database": "ace_auth",
      "Username": "root",
      "Password": "pookie"
    },
    "Shard": {
      "Host": "127.0.0.1",
      "Port": 3306,
      "Database": "ace_shard",
      "Username": "root",
      "Password": "pookie"
    },
    "World": {
      "Host": "127.0.0.1",
      "Port": 3306,
      "Database": "ace_world",
      "Username": "root",
      "Password": "pookie"
    }
  }
}
