// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Marketplace {
    struct ArtPiece {
        uint id;
        string name;
        address owner;
        uint price;
        bool isForSale;
    }

    mapping(uint => ArtPiece) public artPieces;
    mapping(address => uint[]) public ownerArtPieces;

    uint public nextId;

    event ArtPieceListed(uint id, string name, address owner, uint price);
    event ArtPieceSold(uint id, address newOwner, uint price);
    event ArtPiecePriceUpdated(uint id, uint newPrice);

    function listArtPiece(string memory _name, uint _price) public {
        require(_price > 0, "Price must be greater than zero");
        uint id = nextId++;
        artPieces[id] = ArtPiece(id, _name, msg.sender, _price, true);
        ownerArtPieces[msg.sender].push(id);
        emit ArtPieceListed(id, _name, msg.sender, _price);
    }

    function buyArtPiece(uint _id) public payable {
        ArtPiece storage artPiece = artPieces[_id];
        require(artPiece.isForSale, "Art piece is not for sale");
        require(msg.value >= artPiece.price, "Insufficient funds");
        require(artPiece.owner != msg.sender, "Cannot buy your own art");

        address previousOwner = artPiece.owner;
        artPiece.owner = msg.sender;
        artPiece.isForSale = false;
        payable(previousOwner).transfer(artPiece.price);
        emit ArtPieceSold(_id, msg.sender, artPiece.price);
        _removeArtPieceFromOwner(previousOwner, _id);
        ownerArtPieces[msg.sender].push(_id);
    }

    function updateArtPiecePrice(uint _id, uint _newPrice) public {
        ArtPiece storage artPiece = artPieces[_id];
        require(artPiece.owner == msg.sender, "Only owner can update price");
        require(_newPrice > 0, "Price must be greater than zero");

        artPiece.price = _newPrice;
        emit ArtPiecePriceUpdated(_id, _newPrice);
    }

    function _removeArtPieceFromOwner(address _owner, uint _id) internal {
        uint[] storage artPieceIds = ownerArtPieces[_owner];
        for (uint i = 0; i < artPieceIds.length; i++) {
            if (artPieceIds[i] == _id) {
                artPieceIds[i] = artPieceIds[artPieceIds.length - 1];
                artPieceIds.pop();
                break;
            }
        }
    }
}
