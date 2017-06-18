System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var VoterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoterComponent = (function () {
                function VoterComponent() {
                    this.voteCount = 10;
                    this.myvote = 0;
                    this.vote = new core_1.EventEmitter();
                }
                VoterComponent.prototype.up = function () {
                    if (this.myvote == 1)
                        return;
                    else
                        this.myvote++;
                    this.vote.emit({ myvote: this.myvote });
                };
                VoterComponent.prototype.down = function () {
                    if (this.myvote == -1)
                        return;
                    else
                        this.myvote--;
                    this.vote.emit({ myvote: this.myvote });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoterComponent.prototype, "voteCount", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoterComponent.prototype, "myvote", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VoterComponent.prototype, "vote", void 0);
                VoterComponent = __decorate([
                    core_1.Component({
                        selector: 'vote',
                        template: "\n   <div class=\"compwidth\">\n   <h1 \n   (click)=\"up()\" \n   [class.highlighted]=\"myvote==1\" \n   class=\"glyphicon glyphicon-menu-up vote-button\">\n   </h1>\n\n  <h1 class=\"vote-count\">{{voteCount + myvote}}</h1>\n\n   <h1 \n   (click)=\"down()\" \n   [class.highlighted]=\"myvote==-1\" \n   class=\"glyphicon glyphicon-menu-down vote-button\">\n   </h1>\n   \n   </div>\n   ",
                        styles: ["\n     .compwidth {\n         width : 20px;\n         text-align : center;\n         color : grey;\n     }\n     .highlighted {\n         color : yellow;\n     }\n     .vote-button{\n         cursor :  pointer;\n     }\n   "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoterComponent);
                return VoterComponent;
            }());
            exports_1("VoterComponent", VoterComponent);
        }
    }
});
//# sourceMappingURL=voter.component.js.map