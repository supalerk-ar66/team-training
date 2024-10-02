<div class="mockup-browser bg-base-300 border">
    <div class="mockup-browser-toolbar">
      <div class="input">https://ติดต่อเรา.com</div>
    </div>
    <div class="navbar bg-base-100">
        <div class="flex-1">
          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div class="flex-none">
          <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
              <div class="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span class="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <div
              tabindex="0"
              class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
              <div class="card-body">
                <span class="text-lg font-bold">8 รายการ</span>
                <span class="text-info">รวมยอด: $999</span>
                <div class="card-actions">
                  <button class="btn btn-primary btn-block">ดูตะกร้า</button>
                </div>
              </div>
            </div>
          </div>
          <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img
                  alt="โปรไฟล์ผู้ใช้"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a class="justify-between">
                  โปรไฟล์
                  <span class="badge">ใหม่</span>
                </a>
              </li>
              <!-- svelte-ignore a11y-missing-attribute -->
              <li><a>การตั้งค่า</a></li>
              <!-- svelte-ignore a11y-missing-attribute -->
              <li><a>ออกจากระบบ</a></li>
            </ul>
          </div>
        </div>
      </div>
    <div class="bg-base-200 flex justify-center px-4 py-16 ">ทดสอบ1234</div>
  </div>
<br>
<button class="btn">ปุ่ม</button>
<br>
<details class="dropdown">
    <summary class="btn m-1">เปิดหรือปิด</summary>
    <ul class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
      <!-- svelte-ignore a11y-missing-attribute -->
      <li><a>รายการที่ 1</a></li>
      <!-- svelte-ignore a11y-missing-attribute -->
      <li><a>รายการที่ 2</a></li>
    </ul>
  </details>
<br>
  <input type="checkbox" value="synthwave" class="toggle theme-controller" />
