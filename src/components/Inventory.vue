<template>
  <div>
    <b-card border-variant="success">
      <b-card-header>
        <div v-b-toggle.components>
          <font-awesome-icon icon="layer-group"></font-awesome-icon> | 组件
        </div>
      </b-card-header>
      <b-card-body class="text-center">
        <b-collapse id="components">
          <b-table-simple>
            <b-tr>
              <b-th>组件</b-th>
              <b-th>数量</b-th>
              <b-th>描述</b-th>
            </b-tr>
            <b-tr>
              <b-td>
                <img src="@/assets/icons/components/lead.svg" class="component-icon" />
                <p>铅锭</p>
              </b-td>
              <b-td> 10 </b-td>
              <b-td> 可在地图“”中找到 </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <img src="@/assets/icons/components/dust.svg" class="component-icon" />
                <p>硅土</p>
              </b-td>
              <b-td> 10 </b-td>
              <b-td> 可在地图“”中找到 </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <img src="@/assets/icons/components/wax.svg" class="component-icon" />
                <p>蜂蜡</p>
              </b-td>
              <b-td> 10 </b-td>
              <b-td> 可在地图“”中找到 </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <img src="@/assets/icons/components/crystal.svg" class="component-icon" />
                <p>石英</p>
              </b-td>
              <b-td> 10 </b-td>
              <b-td> 可在地图“”中找到 </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <img src="@/assets/icons/components/silver.svg" class="component-icon" />
                <p>银锭</p>
              </b-td>
              <b-td> 10 </b-td>
              <b-td> 可在地图“”中找到 </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <img src="@/assets/icons/components/gum.svg" class="component-icon" />
                <p>树胶</p>
              </b-td>
              <b-td> 10 </b-td>
              <b-td> 可在地图“”中找到 </b-td>
            </b-tr>
          </b-table-simple>
        </b-collapse>
      </b-card-body>
    </b-card>
    <b-card border-variant="success">
      <b-card-header>
        <div v-b-toggle.devices>
          <font-awesome-icon icon="cogs"></font-awesome-icon> | 装置
        </div>
      </b-card-header>
      <b-card-body class="text-center">
        <b-collapse id="devices">
          <b-table-simple>
            <b-tr>
              <b-th>装置</b-th>
              <b-th>状态</b-th>
              <b-th>描述</b-th>
            </b-tr>
            <b-tr>
              <b-td>
                <img src="@/assets/icons/devices/battery.svg" class="component-icon" />
                <p>水晶电池</p>
              </b-td>
              <b-td> 未获得 </b-td>
              <b-td> 可在地图“”中找到 </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <img src="@/assets/icons/devices/compass.svg" class="component-icon" />
                <p>黄金罗盘</p>
              </b-td>
              <b-td> 未获得 </b-td>
              <b-td> 可在地图“”中找到 </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <img src="@/assets/icons/devices/mirror.svg" class="component-icon" />
                <p>全知镜片</p>
              </b-td>
              <b-td> 未获得 </b-td>
              <b-td> 可在地图“”中找到 </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <img src="@/assets/icons/devices/close.svg" class="component-icon" />
                <p>密闭魔镜</p>
              </b-td>
              <b-td> 未获得 </b-td>
              <b-td> 可在地图“”中找到 </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <img src="@/assets/icons/devices/seal.svg" class="component-icon" />
                <p>平衡印章</p>
              </b-td>
              <b-td> 未获得 </b-td>
              <b-td> 可在地图“”中找到 </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <img src="@/assets/icons/devices/door.svg" class="component-icon" />
                <p>虚空之门</p>
              </b-td>
              <b-td> 未获得 </b-td>
              <b-td> 可在地图“”中找到 </b-td>
            </b-tr>
          </b-table-simple>
        </b-collapse>
      </b-card-body>
    </b-card>
    <b-card border-variant="success">
      <b-card-header>
        <div v-b-toggle.treasure>
          <font-awesome-icon icon="gem"></font-awesome-icon> | 宝物
        </div>
      </b-card-header>
      <b-card-body class="text-center">
        <b-collapse id="treasure">
          <b-table-simple>
            <b-tr>
              <b-th>宝物</b-th>
              <b-th>状态</b-th>
              <b-th>描述</b-th>
            </b-tr>
            <b-tr>
              <b-td>
                <img src="@/assets/icons/treasures/armor.svg" class="component-icon" />
                <p>冰丝胸甲</p>
              </b-td>
              <b-td> 未获得 </b-td>
              <b-td> 可在地图“”中找到 </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <img src="@/assets/icons/treasures/bracelet.svg" class="component-icon" />
                <p>雷神手镯</p>
              </b-td>
              <b-td> 未获得 </b-td>
              <b-td> 可在地图“”中找到 </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <img src="@/assets/icons/treasures/silk.svg" class="component-icon" />
                <p>月光蚕丝</p>
              </b-td>
              <b-td> 未获得 </b-td>
              <b-td> 可在地图“”中找到 </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <img src="@/assets/icons/treasures/scale.svg" class="component-icon" />
                <p>亚龙之鳞</p>
              </b-td>
              <b-td> 未获得 </b-td>
              <b-td> 可在地图“”中找到 </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <img src="@/assets/icons/treasures/magma.svg" class="component-icon" />
                <p>熔岩碎片</p>
              </b-td>
              <b-td> 未获得 </b-td>
              <b-td> 可在地图“”中找到 </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <img src="@/assets/icons/treasures/code.svg" class="component-icon" />
                <p>远古手札</p>
              </b-td>
              <b-td> 未获得 </b-td>
              <b-td> 可在地图“”中找到 </b-td>
            </b-tr>
          </b-table-simple>
        </b-collapse>
      </b-card-body>
    </b-card>
    <b-card border-variant="success">
      <b-card-header>
        <div v-b-toggle.tools>
          <font-awesome-icon icon="magic"></font-awesome-icon> | 工具
        </div>
      </b-card-header>
      <b-card-body class="text-center">
        <b-collapse id="tools">
          <b-table-simple>
            <b-tr>
              <b-th>工具</b-th>
              <b-th>状态</b-th>
              <b-th>描述</b-th>
            </b-tr>
            <b-tr>
              <b-td>
                <img src="@/assets/icons/tools/focus.svg" class="component-icon" />
                <p>聚焦护符</p>
              </b-td>
              <b-td> 充能 </b-td>
              <b-td> 启动装置时使用，+2 能量到装置的能量条。效果持续到成功启动装置为止。 </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <img src="@/assets/icons/tools/cane.svg" class="component-icon" />
                <p>麻痹手杖</p>
              </b-td>
              <b-td> 充能 </b-td>
              <b-td> 可以在战斗的任意时刻启用，+2 到这场战斗的每次投掷结果。 </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <img src="@/assets/icons/tools/radar.svg" class="component-icon" />
                <p>探测棒</p>
              </b-td>
              <b-td> 充能 </b-td>
              <b-td> 启用后降低一次探索结果数值，最多减掉 100 。探索结果不能减少到 1 以下。 </b-td>
            </b-tr>
          </b-table-simple>
        </b-collapse>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Inventory",
  computed: {
    // components () {
    //   return this.$store.state.
    // }
  },
};
</script>

<style lang="scss">
.component-icon {
  width: 30px;
}

div.card-header {
  background-color: rgba($color: #000000, $alpha: 0);
}
</style>
