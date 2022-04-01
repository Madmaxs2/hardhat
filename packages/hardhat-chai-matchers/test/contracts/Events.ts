export const EVENTS_SOURCE = `
pragma solidity ^0.6.0;

  contract Events {
      event One(uint value, string msg, bytes32 encoded);
      event Two(uint indexed value, string msg);
      event Index(string indexed msgHashed, string msg, bytes bmsg, bytes indexed bmsgHash, bytes32 indexed encoded);
      event Arrays(uint256[3] value, bytes32[2] encoded);

      function emitOne() public {
          emit One(1, "One", 0x00cFBbaF7DDB3a1476767101c12a0162e241fbAD2a0162e2410cFBbaF7162123);
      }

      function emitOneMultipleTimes() public {
          emit One(1, "One", 0x00cFBbaF7DDB3a1476767101c12a0162e241fbAD2a0162e2410cFBbaF7162123);
          emit One(1, "One", 0x00cFBbaF7DDB3a1476767101c12a0162e241fbAD2a0162e2410cFBbaF7162123);
          emit One(1, "DifferentKindOfOne", 0x0000000000000000000000000000000000000000000000000000000000000001);
      }

      function emitIndex() public {
        emit Index("Three",
              "Three",
              bytes("Three"),
              bytes("Three"),
              0x00cFBbaF7DDB3a1476767101c12a0162e241fbAD2a0162e2410cFBbaF7162123);
      }

      function emitTwo() public {
        emit Two(2, "Two");
      }

      function emitBoth() public {
          emit One(1, "One", 0x0000000000000000000000000000000000000000000000000000000000000001);
          emit Two(2, "Two");
      }

      function _emitInternal() internal {
        emit One(1, "One", 0x00cFBbaF7DDB3a1476767101c12a0162e241fbAD2a0162e2410cFBbaF7162123);
      }
      function emitNested() public {
        _emitInternal();
      }

      function emitArrays() public {
          emit Arrays(
              [
              uint256(1),
              uint256(2),
              uint256(3)
              ],
              [
              bytes32(0x00cFBbaF7DDB3a1476767101c12a0162e241fbAD2a0162e2410cFBbaF7162123),
              bytes32(0x00cFBbaF7DDB3a1476767101c12a0162e241fbAD2a0162e2410cFBbaF7162124)
              ]
          );
      }

      function doNotEmit() pure public {
      }

  }
`;

export const EVENTS_ABI = [
  "event One(uint value, string msg, bytes32 encoded)",
  "event Two(uint indexed value, string msg)",
  "event Index(string indexed msgHashed, string msg, bytes bmsg, bytes indexed bmsgHash, bytes32 indexed encoded)",
  "event Arrays(uint256[3] value, bytes32[2] encoded)",
  "function emitOne() public",
  "function emitOneMultipleTimes() public",
  "function emitTwo() public",
  "function emitIndex() public",
  "function emitBoth() public",
  "function emitArrays() public",
  "function doNotEmit() pure public",
  "function emitNested() public",
  "function _emitInternal() internal",
];

// eslint-disable-next-line max-len
export const EVENTS_BYTECODE =
  "608060405234801561001057600080fd5b50610862806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063b2f998381161005b578063b2f99838146100b5578063baa4c5ef146100bf578063d5eacee0146100c9578063db6cdf68146100d357610088565b806334c101151461008d5780633f0e64ba1461009757806377f3094b146100a1578063a35a3a0d146100ab575b600080fd5b6100956100dd565b005b61009f610149565b005b6100a96101e6565b005b6100b36103e1565b005b6100bd6104e7565b005b6100c761069b565b005b6100d16106a5565b005b6100db61078d565b005b60027f726d8d77432fef0b8999b8e1f5ed6d11c42c0a861c61228b03e767ad3c43d0df6040518080602001828103825260038152602001807f54776f000000000000000000000000000000000000000000000000000000000081525060200191505060405180910390a2565b7f824e7918d5bcff68837d677d05258e17ec7b1bd7b488aa5e3bd2d5cbefa9e04c60017ecfbbaf7ddb3a1476767101c12a0162e241fbad2a0162e2410cfbbaf716212360405180838152602001806020018360001b8152602001828103825260038152602001807f4f6e650000000000000000000000000000000000000000000000000000000000815250602001935050505060405180910390a1565b7ecfbbaf7ddb3a1476767101c12a0162e241fbad2a0162e2410cfbbaf716212360001b6040518060400160405280600581526020017f54687265650000000000000000000000000000000000000000000000000000008152506040518082805190602001908083835b60208310610272578051825260208201915060208101905060208303925061024f565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902060405180807f5468726565000000000000000000000000000000000000000000000000000000815250600501905060405180910390207f2c0160d31a12563decf7b38f40fd0fab153ae9c20f87643b7fb747e3f0e4c93f6040518060400160405280600581526020017f5468726565000000000000000000000000000000000000000000000000000000815250604051808060200180602001838103835260058152602001807f5468726565000000000000000000000000000000000000000000000000000000815250602001838103825284818151815260200191508051906020019080838360005b838110156103a4578082015181840152602081019050610389565b50505050905090810190601f1680156103d15780820380516001836020036101000a031916815260200191505b50935050505060405180910390a4565b7f35cf379c46b4950eedc35bc96d30e9fe7480e2422431c50ea5c4b211ee6b1b8d60405180606001604052806001815260200160028152602001600381525060405180604001604052807ecfbbaf7ddb3a1476767101c12a0162e241fbad2a0162e2410cfbbaf716212360001b81526020017ecfbbaf7ddb3a1476767101c12a0162e241fbad2a0162e2410cfbbaf716212460001b8152506040518083600360200280838360005b838110156104a4578082015181840152602081019050610489565b5050505090500182600260200280838360005b838110156104d25780820151818401526020810190506104b7565b505050509050019250505060405180910390a1565b7f824e7918d5bcff68837d677d05258e17ec7b1bd7b488aa5e3bd2d5cbefa9e04c60017ecfbbaf7ddb3a1476767101c12a0162e241fbad2a0162e2410cfbbaf716212360405180838152602001806020018360001b8152602001828103825260038152602001807f4f6e650000000000000000000000000000000000000000000000000000000000815250602001935050505060405180910390a17f824e7918d5bcff68837d677d05258e17ec7b1bd7b488aa5e3bd2d5cbefa9e04c60017ecfbbaf7ddb3a1476767101c12a0162e241fbad2a0162e2410cfbbaf716212360405180838152602001806020018360001b8152602001828103825260038152602001807f4f6e650000000000000000000000000000000000000000000000000000000000815250602001935050505060405180910390a17f824e7918d5bcff68837d677d05258e17ec7b1bd7b488aa5e3bd2d5cbefa9e04c60018060405180838152602001806020018360001b8152602001828103825260128152602001807f446966666572656e744b696e644f664f6e650000000000000000000000000000815250602001935050505060405180910390a1565b6106a361078f565b565b7f824e7918d5bcff68837d677d05258e17ec7b1bd7b488aa5e3bd2d5cbefa9e04c60018060405180838152602001806020018360001b8152602001828103825260038152602001807f4f6e650000000000000000000000000000000000000000000000000000000000815250602001935050505060405180910390a160027f726d8d77432fef0b8999b8e1f5ed6d11c42c0a861c61228b03e767ad3c43d0df6040518080602001828103825260038152602001807f54776f000000000000000000000000000000000000000000000000000000000081525060200191505060405180910390a2565b565b7f824e7918d5bcff68837d677d05258e17ec7b1bd7b488aa5e3bd2d5cbefa9e04c60017ecfbbaf7ddb3a1476767101c12a0162e241fbad2a0162e2410cfbbaf716212360405180838152602001806020018360001b8152602001828103825260038152602001807f4f6e650000000000000000000000000000000000000000000000000000000000815250602001935050505060405180910390a156fea26469706673582212208a01fcb12fd6c96d5813c2d16a13edf495b5261a585830072215df30f387ceeb64736f6c63430006000033";
