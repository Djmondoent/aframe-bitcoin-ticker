 AFRAME.registerComponent("bitcoin-ticker", {
        schema: {
          interval: { type: "number", default: 2000 },
        },

        init: function () {
          this.updatePrice = this.updatePrice.bind(this);
          this.tick = AFRAME.utils.throttleTick(
            this.tick,
            this.data.interval,
            this
          );
        },

        updatePrice: async function () {
          try {
            const response = await fetch(
              "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
            );
            const data = await response.json();
            this.el.setAttribute(
              "text",
              "value",
              "Bitcoin Price: $" + data.bitcoin.usd.toFixed(2)
            );
          } catch (error) {
            console.error("Error fetching Bitcoin price:", error);
          }
        },

        tick: function () {
          this.updatePrice();
        },
      });
