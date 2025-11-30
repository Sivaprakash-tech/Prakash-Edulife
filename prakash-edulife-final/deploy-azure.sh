#!/usr/bin/env bash
set -euo pipefail
RG="prakash-rg"
VM="prakash-vm"
LOC="eastus"
USER="azureuser"
az group create -n $RG -l $LOC
az vm create --resource-group $RG --name $VM --image UbuntuLTS --size Standard_B2ms --admin-username $USER --generate-ssh-keys
for p in 22 80 5000 9090 3000 8080; do az vm open-port --resource-group $RG --name $VM --port $p >/dev/null; done
echo "VM created. Get IP: az vm list-ip-addresses -g $RG -n $VM --query \"[0].virtualMachine.network.publicIpAddresses[0].ipAddress\" -o tsv"
